const request = require('supertest');
const app = require('../app');

// Test 1: Homepage loads
test('Homepage should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
});

// Test 2: Health check works
test('Health check should return healthy', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
});

// Test 3: About page works
test('About page should return app info', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toBe(200);
    expect(response.body.app).toBe('CI/CD Demo');
});