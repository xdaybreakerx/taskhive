const { User } = require('../models/userModel.js');
const { generateJWT } = require('../functions/jwtFunctions');
const { updateOneUser } = require('../services/userService.js');

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

async function userLogin(request, response) {
    try {
        const { username, password } = request.body;

        // Validate input
        if (!username || !password) {
            return response.status(400).json({
                message: 'Username and password are required.',
            });
        }

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(401).json({
                message: 'Invalid username or password.',
            });
        }

        // Temporarily skip password hashing for MVP; directly check if passwords match
        if (user.password !== password) {
            return response.status(401).json({
                message: 'Invalid username or password.',
            });
        }

        // Generate JWT token
        const token = generateJWT(user._id, user.username, user.role);

        // Return the token and success message
        return response.status(200).json({
            message: 'Logged in successfully.',
            token: token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role,
            },
        });
    } catch (error) {
        // Handle any other error
        return response.status(500).json({
            message: 'An error occurred during login. Please try again later.',
            error: error.message,
        });
    }
}

// Protected route - requires admin access
async function userUpdateRole(request, response) {
    try {
        // Check that username and role are provided in request.body
        const { username, role } = request.body;

        if (!username || !role) {
            return response.status(400).json({
                message:
                    'Incorrect or missing user details provided. Require username and role.',
            });
        }

        // Update user
        const updatedUser = await updateOneUser({ username }, { role });

        // Check if the user was found and updated
        if (!updatedUser) {
            return response.status(404).json({
                message: 'User not found.',
            });
        }

        // Return updated user details
        return response.status(200).json({
            user: {
                username: updatedUser.username,
                role: updatedUser.role,
            },
        });
    } catch (error) {
        // Handle any other error
        return response.status(500).json({
            message:
                'An error occurred during user role update. Please try again later.',
            error: error.message,
        });
    }
}

module.exports = {
    userSignUp,
    userLogin,
    userUpdateRole,
};
