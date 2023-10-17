import fp from "../models/fp.js";

let middleware = {};

/** The `middleware.initResponseLocals` function is a middleware function that initializes the
`res.locals` object with some properties. 
 * 
 * @param {*} strApp The Application Name to store app specific data in res.locals
 * @returns {function(req, res, next)} Middleware function
 */
middleware.initResponseLocals = (strApp) => {
  return (req, res, next) => {
    res.locals = fp.addObject(res.locals, strApp, []);
    res.locals[strApp] = fp.addObject(res.locals[strApp], "aryPromisess", []);
    res.locals[strApp] = fp.addObject(res.locals[strApp], "aryResponses", []);    
    next();
  };
};

export default middleware;
