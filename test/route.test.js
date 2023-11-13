const request = require('supertest')
let server


describe('ROUTE TEST', () => {

    beforeEach(() => {
        server = require('../server')
    })

    afterEach(() => {
        server.close()
    })

    describe('GET TRY', () => {
        it('Should return 200 status', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        it('Rodrigo return 501 status', async () => {
            const response = await request(server).get('/marcel')
            expect(response.status).toBe(501)
        })        
    })

    describe('POST TRY', () => {
        it('Should return 200', async () => {
            const response = await request(server).post('/auth/login')

            expect(response.status).toBe(200)
        })
    })
})