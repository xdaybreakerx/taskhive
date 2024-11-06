const { User } = require('../models/userModel.js');
const { generateJWT } = require('../functions/jwtFunctions');

async function userSignUp(request, response) {
    try {
        // Check that username and password are provided in request.body
        const { username, password } = request.body;

        if (!username || !password) {
            return response.status(400).json({
                message: 'Incorrect or missing sign-up credentials provided',
            });
        }

        // Create a new user in the database
        const newUser = await User.create({ username, password });

        // Generate a JWT
        const newJwt = generateJWT(newUser.id, newUser.username);

        // Return JWT and user details
        return response.status(201).json({
            jwt: newJwt,
            user: {
                id: newUser.id,
                username: newUser.username,
            },
        });
    } catch (error) {
        // Handle duplicate username error
        if (error.name === 'SequelizeUniqueConstraintError') {
            return response.status(409).json({
                message:
                    'Username already exists. Please choose a different username.',
            });
        }

        // Handle any other error
        return response.status(500).json({
            message:
                'An error occurred during sign-up. Please try again later.',
            error: error.message,
        });
    }
}

module.exports = {
    userSignUp,
};
