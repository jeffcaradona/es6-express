import * as debug from "../utils/debug.js";
import logger from "./../utils/logger.js"; // ⬅️ Your winston logger

debug.debugApplication("In errorController.js");

export const defaultErrorHandler = function (err, req, res, next) {

  logger.error(
    `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  if (req.app.get("env") === "development") {
    logger.error(err);
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
};

export default defaultErrorHandler;
