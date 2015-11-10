import reactStamp from 'react-stamp';
import header from './Header';
import footer from './Footer';

export default (React, ...behaviours) => {
    const Header = header(React),
          Footer = footer(React);

    return reactStamp(React).compose({
        render () {
            const title = this.props.title || "Hello World!";
            return (
                <html>
                <head>
                    <title>{title}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                </head>
                <body style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8em', backgroundColor: '#f5f5f5', color: '#666' }}>
                    <Header title={title}/>
                    { this.props.children }
                    <Footer fooMessage={ (this.getFoo && this.getFoo()) || 'No foo :(' }/>
                </body>
                </html>
            );
        }
    }, ...behaviours);
};