export const setResponse = (data, response, statusCode = 200, message = 'Success') => {
    response.status(statusCode).json({ message, data });
};

export const setConflictResponse = (message, response) => {
    response.status(409).json({ message });
};

export const setUnauthorizedResponse = (message, response) => {
    response.status(401).json({ message });
};

export const setNotFoundResponse = (message, response) => {
    response.status(404).json({ message });
};

export const setErrorResponse = (err, response, statusCode = 500) => {
    let message = err.message || 'An Error Occurred While Processing Your Request';
    let code = 'Service Error';
    response.status(statusCode).json({ code, message });
};
