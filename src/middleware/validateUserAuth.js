const { decodeJWT } = require("../functions/jwtFunctions");

async function validateUserAuth(request, response, next) {
    const authHeader = request.headers.authorization;
    const providedToken = authHeader && authHeader.split(' ')[1]; 

    if (!providedToken) {
        return response.status(403).json({
            message: 'Sign in to view this content!',
        });
    }

    try {
        // Decode the JWT
        const decodedData = decodeJWT(providedToken);

        // Ensure decodedData contains user information
        if (decodedData && decodedData.userId) {
            // Attach decoded user data to request for use in downstream middleware
            request.user = decodedData;
            next();
        } else {
            return response.status(403).json({
                message: 'Sign in to view this content!',
            });
        }
    } catch (error) {
        return response.status(403).json({
            message: 'Invalid token.',
            error: error.message,
        });
    }
}


module.exports = {
    validateUserAuth,
};
