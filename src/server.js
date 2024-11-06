const express = require('express');
const app = express();

app.use(express.json());

// homepage route to confirm server running
app.get('/', (request, response) => {
    response.json({
        message: 'Hello, world!',
    });
});

// user routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// swagger init for documentation
const { specs, swaggerUi } = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = {
    app,
};
