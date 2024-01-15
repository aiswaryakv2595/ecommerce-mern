//not found
const notFound = (req,res,next) => {
    const error = new Error(`Not found : ${res.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    console.log(statuscode)
    res.status(statuscode);
    res.json({
      status: "fail",
      message: err?.message,
      stack: err?.stack,
    });
  };

module.exports = {notFound,errorHandler}