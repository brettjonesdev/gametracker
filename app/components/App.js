import React from 'react';
import {RouteHandler} from 'react-router';

export default class App extends React.Component {
    /**
     * propTypes
     * @property {string} path URL path
     */
    static get propTypes() {
        return {
            path: React.PropTypes.string
        };
    }
    render() {
        const title = `NBA GameTracker`;
        return (
            <html lang="ja">
            <head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Cache-Control" content="no-cache"/>
                <meta httpEquiv="Pragma" content="no-cache"/>
                <meta charSet="utf8"/>
                <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css"/>
            </head>
            <body>
            <div id="app" className="container">
                <RouteHandler />
            </div>
            </body>
            <script src="bundle.js?v=20151230"></script>
            </html>
        );
    }
}
