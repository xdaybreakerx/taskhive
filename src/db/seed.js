const { dbConnect } = require('./dbFunctions');
const { UserModel } = require('../models/userModel');

require('dotenv').config();

async function seed() {
    try {
        // Create users with different roles
        const users = [
            {
                username: 'adminUser',
                password: 'password123',
                role: 'Admin',
            },
            {
                username: 'projectManagerUser',
                password: 'password123',
                role: 'ProjectManager',
            },
            {
                username: 'teamMemberUser',
                password: 'password123',
                role: 'TeamMember',
            },
        ];

        // Insert users into the database
        await UserModel.insertMany(users);
        console.log(
            'Users with roles Admin, ProjectManager, and TeamMember created successfully.'
        );
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        process.exit(); // Exit process when done
    }
}

dbConnect().then(() => {
    console.log('Connected to DB, seeding now!');
    seed();
});
