import fp from "../models/fp.js";

let middleware = {};

middleware.initResponseLocals = (req, res, next) => {
    res.locals = fp.addObject(res.locals,"dexPromisess", []);    
    res.locals = fp.addObject(res.locals,"dexResponses", []);
    console.info("res.locals",res.locals);
    next();
};


export default middleware;
