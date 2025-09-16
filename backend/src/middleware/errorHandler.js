// src/middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  console.error(err); // durante dev isso ajuda muito
  const status = err.status || 500;
  res.status(status).json({
    error: true,
    message: err.message || 'Internal Server Error'
  });
};
