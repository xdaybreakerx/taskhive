require('dotenv').config();

const { dbConnect } = require('./functions/dbFunctions.js');

const { specs, swaggerUi } = require('./swagger');

const { app } = require('./server.js');

// Get the PORT from env variables
const PORT = process.env.PORT || 8080;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, async () => {
    await dbConnect;

    console.log('Server is running on http://localhost:' + PORT);
});
