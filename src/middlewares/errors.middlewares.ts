export const notFoundError = (req, res, next) => {
    const err: Error = new Error('Not Foun');
    next({
        ...err,
        status: 404
    });
};


export const errorHandler = (err, req, res, next) => {
    return res.status(err.status || 500).json({
        message: err.message,
        status: err.status,
        stack: err.stack
    });
};