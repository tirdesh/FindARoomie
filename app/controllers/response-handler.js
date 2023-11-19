

export const setResponse = (data, response) => {
    response.status(200)
        .json(data);
}

export const setErrorResponse = (err, response) => {
    console.log("Actual Error for server manager: ", err);
    response.status(500)
        .json({
            code: "Service Error",
            message: "An Error Occured While Processing Your Request"
        })
}