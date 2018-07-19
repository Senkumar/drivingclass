/*
 * Tests for the express server
 */

const request = require('supertest')
const server = require('../index.js')

describe('GET /', () => {
    it('Responds with HTTP 200', () => {
        request(server).get("/")
                       .expect(200)
    })
})