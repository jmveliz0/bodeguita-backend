import { Category } from '../db/postgres/index'

class CategoryDao {
    async create(obj){
        let data = await Category.create(obj)
        return data
    }
    async findAll(){
        let data = await Category.findAll({order: [['id','ASC']] })
        return data
    }
    async findOne(id){
      let data = await Category.findOne({where:{id}})
      return data
    }
    async update(obj,id){
      let result = await Category.update(obj,{where:{id}})
      return result
    }
    async destroy(id){
      let data = await Category.destroy({where: {id}})
      return data
    }
}

export default new CategoryDao()