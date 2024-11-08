require('dotenv').config();

const { dbConnect } = require('./db/dbFunctions.js');

const { app } = require('./server.js');

// Get the PORT from env variables
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    await dbConnect();

    console.log('Server is running on http://localhost:' + PORT);
});
