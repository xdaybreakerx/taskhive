const mongoose = require('mongoose');

let databaseUrl =
    process.env.DATABASE_URL ||
    `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;

async function dbConnect() {
    try {
        await mongoose.connect(databaseUrl);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
}

async function dbDisconnect() {
    await mongoose.connection.close();
}

async function dbDrop() {
    await mongoose.connection.db.dropDatabase();
}

module.exports = {
    dbConnect,
    dbDisconnect,
    dbDrop,
};
