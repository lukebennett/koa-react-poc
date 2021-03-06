import React from 'react';
import reactStamp from 'react-stamp';

import layout from '../components/Layout';
import footer from '../components/Footer';

export default (props) => {
    const behaviours = [],
          Layout = layout(React),
          Footer = footer(React);
    
    const element = reactStamp(React).compose({
        render () {
            return (
                <div>
                    This is page2! It doesn't have the same layout.
                    <Footer/>
                </div>
            );
        }
    }, ...behaviours);
    
    return React.createElement(element, props);
};

/*
 * Would be nice to be able to export a pure React component[0] but that
 * requires the react view engine to be modified, so stuck to exporting a
 * standard React element for now.
 *
 * [0] https://github.com/ericelliott/react-pure-component-starter#pure-component-factories
 *
export default (React, ...behaviours) => {
    const Layout = layout(React, ...behaviours);
    
    return reactStamp(React).compose({
        render () {
            return (
                <Layout>
                    This is page1!
                </Layout>
            );
        }
    }, ...behaviours);
};
 */