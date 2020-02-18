'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apolloServerExpress = require('apollo-server-express');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

require('./utils/db');

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv2.default.config();

const app = (0, _express2.default)();
const server = new _apolloServerExpress.ApolloServer({
    schema: _schema2.default,
    cors: true,
    playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    tracing: true,
    path: '/',
});
server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
        // eslint-disable-next-line no-undef
        new Promise((resolve, reject) => {
            if (_mongoose2.default.connection.readyState > 0) {
                resolve();
            } else {
                reject();
            }
        }),
});
app.listen(
    {
        port: process.env.PORT,
    },
    () => {
        console.log(`🚀 Server listening on port ${process.env.PORT}`);
        console.log(
            `😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`
        );
    }
);
