import '@babel/polyfill';
import CategoryDao from '../dao/category-dao'

class CategoryService {
  async all(req, res) {
    const data = await CategoryDao.findAll();
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async findById(req, res) {
    const id = req.params.id;
    const data = await CategoryDao.findOne(id);
    if (!data) {
      throw Error("Data not found" );
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async create(req, res) {
    const product = req.body;
    const data = await CategoryDao.create(product);
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data: data })
    return data 
  }
  async update(req, res) {
    const id = req.params.id;
    let result = await CategoryDao.update(req.body,id)
    let updateResult = result[0]
    //  ('Mi result is ->>',result)
    if(updateResult === 0){
      throw Error("Data not found" );
    }
    let data = await CategoryDao.findOne(id)
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async deleteById(req, res) {
    const id = req.params.id;
    let result = await CategoryDao.destroy(id);
    if (result === 0) {
      throw Error("Data not found" );
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data:null });
    return result
  }
}

export default new CategoryService();
