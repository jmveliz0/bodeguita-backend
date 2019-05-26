jest.mock('../dao/user-dao')
import UserService from '../services/user-service'

describe('Suite de pruebas para usuario',()=>{
    
    test('Crear un usuario -> funciona',async ()=>{
        let req = {
            body: {
                codigo: "123",
                clave:"123"
            }
        }
      let response = await UserService.create(req,null)
      expect(response).toEqual(expect.objectContaining({
        id: expect.any(Number),
        codigo: expect.any(String),
        clave: expect.any(String)
      }))
    })

    test('Listar usuario -> funciona',async ()=>{
      let response = await UserService.all()
      expect(response.length).toBeGreaterThanOrEqual(0)
    })

    test('Encontrar un usuario con el mismo Id que se solicito -> funciona',async ()=>{
      let req = {
        params: {
          id: 2
        }
      }
      let response = await UserService.findById(req,null)
      expect(response.id).toBe(2)
    })

})

