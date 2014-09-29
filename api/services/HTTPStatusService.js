/**
 * HTTPStatusService
 *
 * @description :: Common of HTTP status
 * @author      :: Jose Luis Quintana
 * @help        :: See http://sailsjs.org/#/documentation/concepts/Services
 */

module.exports = {
    OK: {
        code: 200,
        msg: 'The request sent by the client was successful.'
    },
    BAD_REQUEST: {
        code: 400,
        msg: 'The syntax of the request was not understood by the server.'
    },
    NO_AUTHORIZED: {
        code: 401,
        msg: 'The request needs user authentication.'
    },
    FORBIDDEN: {
        code: 403,
        msg: 'The server has refused to fulfill the request.'
    },
    NOT_FOUND: {
        code: 404,
        msg: 'The document/file requested by the client was not found.'
    },
    REQUEST_TIMEOUT: {
        code: 408,
        msg: 'The client failed to sent a request in the time allowed by the server.'
    },
    ERROR: {
        code: 500,
        msg: 'The request was unsuccessful due to an unexpected condition encountered by the server.'
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        msg: 'The request was unsuccessful to the server being down or overloaded.'
    }
};
