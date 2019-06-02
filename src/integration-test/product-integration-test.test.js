import request from 'supertest'
import app from '../app.js'


describe('Probando CRUD de productos', () => {
	test('Deberia responder al metodo GET', async () => {
		let response = await request(app).get('/product')
		expect(response.statusCode).toBe(200);
	})
})