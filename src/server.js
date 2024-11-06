const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (response) => {
    response.json({
        message: 'Hello, world!',
    });
});

module.exports = {
    app,
};
