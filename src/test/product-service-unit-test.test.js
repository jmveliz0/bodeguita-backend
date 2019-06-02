jest.mock('../dao/product-dao')
import ProductService from '../services/product-service'

describe('Suite de pruebas para productos',()=>{
    var postRequest = {
        body: {
          id:6,
          name:"Chocolate",
          quantity:69,
          price:10.99,
          categoryId:2,
          discount: 0.2
        }
    }

    test('Crear un producto -> funciona',async ()=>{
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await ProductService.create(postRequest,resMock)
      expect(response).toEqual(expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        quantity: expect.any(Number),
        price: expect.any(Number),
        categoryId: expect.any(Number),
        discount: expect.any(Number)
      }))
    })

    test('Listar productos -> funciona', async ()=>{
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await ProductService.all(null,resMock)
      expect(response.length).toBeGreaterThanOrEqual(0)
    })

    test('Encontrar un producto con el mismo Id que se solicito -> funciona',async ()=>{
      let reqMock = {
        params: {
          id: 4
        }
      }
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await ProductService.findById(reqMock,resMock)
      expect(response.id).toBe(4)
    })

    test('Actualizar productos funciona',async ()=>{
      let req = {
        params: {
          id: 5
        },
        body:{
            name: 'Lapiceros',
            quantity: 65,
            price: 12.99,
            categoryId: 5,
            discount: 0.8
        }
      }
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await ProductService.update(req,resMock)
      expect(response).toEqual({
        id: 5,
        name: 'Lapiceros',
        quantity: 65,
        price: 12.99,
        categoryId: 5,
        discount: 0.8
      })
    })

    test('Eliminar productos funciona',async ()=>{
      let req = {
        params: {
          id: 6
        }
      }
      let resMock = {status:(code) => {return {json: ()=>{} }} }
      let response = await ProductService.deleteById(req,resMock)
      expect(response).toBe(1)
    })
})

