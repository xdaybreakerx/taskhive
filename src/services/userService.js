// Provide CRUD functions for the UserModel

const { UserModel } = require('../models/userModel');

// Create a new user
async function createUser(username, password, role) {
    let result = await UserModel.create({
        username: username,
        password: password,
        role: role,
    });
    return result;
}

// Find a single user by query
async function findOneUser(query) {
    let result = await UserModel.findOne(query);
    return result;
}

// Find multiple users by query
async function findManyUsers(query) {
    let result = await UserModel.find(query);
    return result;
}

// Update a single user by query
async function updateOneUser(query, updateData) {
    let result = await UserModel.findOneAndUpdate(query, updateData, {
        new: true, // Return the updated document
        runValidators: true,
    });
    return result;
}

// Update multiple users by query
async function updateManyUsers(query, updateData) {
    let result = await UserModel.updateMany(query, updateData, {
        runValidators: true,
    });
    return result;
}

// Delete a single user by query
async function deleteOneUser(query) {
    let result = await UserModel.findOneAndDelete(query);
    return result;
}

// Delete multiple users by query
async function deleteManyUsers(query) {
    let result = await UserModel.deleteMany(query);
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
