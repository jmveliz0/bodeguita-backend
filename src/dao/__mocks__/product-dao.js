console.log('Entrando al DAO mock de Productos')

class ProductDao {
    async create(product){
        let data = Object.assign(product,{id:4}) 
        return data 
    }
    async findAll(){
      let data = JSON.parse(`[
        {
            "id": "4",
            "nombre": "Cortinas",
            "cantidad": "69",
            "precio": "10.99",
            "tipo": "2",
            "descuento": "0.2"
        },
        {
            "id": "5",
            "nombre": "Tablets 7.1'",
            "cantidad": "69",
            "precio": "10.99",
            "tipo": "2",
            "descuento": "0.2"
        },
        {
            "id": "9",
            "nombre": "Chocolate",
            "cantidad": "69",
            "precio": "10.99",
            "tipo": "2",
            "descuento": "0.2"
        }
      ]`)
      return data
    }
    async findOne(id){
      let data = null
      if(id === 4){
        data = {
          id: 4,
          nombre: 'Cortinas',
          cantidad: 69,
          precio: 10.99,
          tipo: 2,
          descuento: 0.2
        }
      }else if(id===5){
        data = {
          id: 5,
          nombre: 'Lapiceros',
          cantidad: 65,
          precio: 12.99,
          tipo: 5,
          descuento: 0.8
        }
      }
      return data
    }
    async update(obj,id){
      // return Object.assign(obj,{id:id})
      return [1]
    }
    async destroy(id){
      return 1
    }
}

export default new ProductDao()