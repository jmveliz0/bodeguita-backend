const ProductService = require('../services/product-service')

describe('suite de pruebas para productos',()=>{
    // beforeAll(()=>{
        
    // })
    var obj = {
        params: {
            id: 3
        },
        body: {
            nombre:"jose",
            cantidad: 80,
            precio: 23.99,
            tipo: 'Tipo2',
            descuento: 0.2
        }
    }

    test('testing wrong name method',()=>{
        let s = ProductService.create(obj,null)
        expect(s.abrev).toBe('j')
    })
})
