// Provide CRUD functions for the User

const { User } = require('../models/userModel');

// Create a new user
async function createUser(username, password, role) {
    let result = await User.create({
        username: username,
        password: password,
        role: role,
    });
    return result;
}

// Find a single user by query
async function findOneUser(query) {
    let result = await User.findOne(query);
    return result;
}

// Find multiple users by query
async function findManyUsers(query) {
    let result = await User.find(query);
    return result;
}

// Update a single user by query
async function updateOneUser(query, updateData) {
    let result = await User.findOneAndUpdate(query, updateData, {
        new: true, // Return the updated document
        runValidators: true,
    });
    return result;
}

// Update multiple users by query
async function updateManyUsers(query, updateData) {
    let result = await User.updateMany(query, updateData, {
        runValidators: true,
    });
    return result;
}

// Delete a single user by query
async function deleteOneUser(query) {
    let result = await User.findOneAndDelete(query);
    return result;
}

// Delete multiple users by query
async function deleteManyUsers(query) {
    let result = await User.deleteMany(query);
    return result;
}

module.exports = {
    createUser,
    findOneUser,
    findManyUsers,
    updateOneUser,
    updateManyUsers,
    deleteOneUser,
    deleteManyUsers,
};
