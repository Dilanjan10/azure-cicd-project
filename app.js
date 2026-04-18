const express = require('express');
const app = express();

// Homepage
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>My CI/CD App</title></head>
        <body style="font-family: Arial; text-align: center; padding: 50px;">
            <h1>Hello! My CI/CD Pipeline Works!</h1>
            <p>Version: 1.0.0</p>
            <p>This app was deployed automatically using Azure DevOps.</p>
            <hr>
            <p><a href="/health">Check Health</a> | <a href="/about">About</a></p>
        </body>
        </html>
    `);
});

// Health check - the pipeline uses this to verify deployment
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', time: new Date().toISOString() });
});

// About page
app.get('/about', (req, res) => {
    res.json({ app: 'CI/CD Demo', author: 'Me', version: '1.0.0' });
});

module.exports = app;