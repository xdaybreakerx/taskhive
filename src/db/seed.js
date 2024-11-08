const { dbConnect } = require('./database');

require('dotenv').config();

async function seed() {
    // TODO
}

dbConnect().then(() => {
    console.log('Connected to DB, seeding now!');
    seed();
});
