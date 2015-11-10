import React from 'react';
import reactStamp from 'react-stamp';
import layout from '../components/Layout';
import container from '../components/Container';
import button from '../components/Button';
import text from '../components/Text';

export default (props) => {
    const behaviours = [{
            state: {
                foo: 'bar'
            },
            // Should be able to use ${this.state.foo} but lexical this has not
            // yet landed in V8 - have hacked for now
            getFoo: () => `Foo is set to ${behaviours[0].state.foo}`
          }],
          Container = container({
            React,
            Button: button(React),
            Text: text(React),
          }, ...behaviours),
          Layout = layout(React, ...behaviours);

    const element = reactStamp(React).compose({
        render () {
            return (
                <Layout title={this.props.title}>
                    <Container/>
                </Layout>
            );
        }
    }, ...behaviours);
    
    return React.createElement(element, props);
}

/*
 * Would be nice to be able to export a pure React component[0] but that
 * requires the react view engine to be modified, so stuck to exporting a
 * standard React element for now.
 *
 * [0] https://github.com/ericelliott/react-pure-component-starter#pure-component-factories
 *
export default (React, ...behaviours) => {
    const Container = container({
            React,
            Button: button(React),
            Text: text(React),
          }, ...behaviours),
          Layout = layout(React, ...behaviours);
    
    return reactStamp(React).compose({
        render () {
            return (
                <Layout>
                    <Container/>
                </Layout>
            );
        }
    }, ...behaviours);
};
 */