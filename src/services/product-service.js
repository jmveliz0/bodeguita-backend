import '@babel/polyfill';
import * as Messages from '../utils/message-constants';
import ProductDao from '../dao/product-dao'

class ProductService {
  async all(req, res) {
    const data = await ProductDao.findAll();
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async findById(req, res) {
    const id = req.params.id;
    const data = await ProductDao.findOne(id);
    if (!data) {
      throw Error(Messages.DATA_NOT_FOUND);
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async create(req, res) {
    const product = req.body;
    const data = await ProductDao.create(product);
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data: data })
    return data 
  }
  async update(req, res) {
    const id = req.params.id;
    let result = await ProductDao.update(req.body,id)
    let updateResult = result[0]
    // console.log('Mi result is ->>',result)
    if(updateResult === 0){
      throw Error(Messages.DATA_NOT_FOUND);
    }
    let data = await ProductDao.findOne(id)
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async deleteById(req, res) {
    const id = req.params.id;
    let result = await ProductDao.destroy(id);
    if (result === 0) {
      throw Error(Messages.DATA_NOT_FOUND);
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data:null });
    return result
  }
}

export default new ProductService();
