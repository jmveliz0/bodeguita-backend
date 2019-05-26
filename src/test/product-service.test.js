jest.mock('../dao/product-dao')
import ProductService from '../services/product-service'

describe('Suite de pruebas para productos',()=>{
    var postRequest = {
        body: {
          id:6,
          nombre:"Chocolate",
          cantidad:69,
          precio:10.99,
          tipo:2,
          descuento: 0.2
        }
    }

    test('Crear un producto -> funciona',async ()=>{
      let response = await ProductService.create(postRequest,null)
      expect(response).toEqual(expect.objectContaining({
        id: expect.any(Number),
        nombre: expect.any(String),
        cantidad: expect.any(Number),
        precio: expect.any(Number),
        tipo: expect.any(Number),
        descuento: expect.any(Number)
      }))
    })

    test('Listar productos -> funciona',async ()=>{
      let response = await ProductService.all()
      expect(response.length).toBeGreaterThanOrEqual(0)
    })

    test('Encontrar un producto con el mismo Id que se solicito -> funciona',async ()=>{
      let req = {
        params: {
          id: 4
        }
      }
      let response = await ProductService.findById(req)
      expect(response.id).toBe(4)
    })

    test('Actualizar productos funciona',async ()=>{
      let req = {
        params: {
          id: 5
        },
        body:{
            nombre: 'Lapiceros',
            cantidad: 65,
            precio: 12.99,
            tipo: 5,
            descuento: 0.8
        }
      }
      let response = await ProductService.update(req,null)
      expect(response).toEqual({
        id: 5,
        nombre: 'Lapiceros',
        cantidad: 65,
        precio: 12.99,
        tipo: 5,
        descuento: 0.8
      })
    })

    test('Eliminar productos funciona',async ()=>{
      let req = {
        params: {
          id: 6
        }
      }
      let response = await ProductService.deleteById(req,null)
      expect(response).toBe(1)
    })
})

