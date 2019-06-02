import { UserProduct } from '../db/postgres/index'

class UserProductDao {
    async create(obj){
        let data = await UserProduct.create(obj)
        return data
    }
    async findAll(){
        let data = await UserProduct.findAll({order: [['id','ASC']] })
        return data
    }
    async findOne(id){
      let data = await UserProduct.findOne({where:{id}})
      return data
    }
    async update(obj,id){
      let result = await UserProduct.update(obj,{where:{id}})
      return result
    }
    async destroy(id){
      let data = await UserProduct.destroy({where: {id}})
      return data
    }
}

export default new UserProductDao()