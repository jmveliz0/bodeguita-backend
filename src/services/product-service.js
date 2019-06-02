import '@babel/polyfill';
import ProductDao from '../dao/product-dao'

class ProductService {
  all(req, res) {
    // const data = await ProductDao.findAll();
    // process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    // return data
    let products
    return ProductDao.findAll().then((data)=>{
      products = data
      res.status(200).json({data})
      return products
    })
  }
  async findById(req, res) {
    const id = req.params.id;
    const data = await ProductDao.findOne(id);
    if (!data) {
      throw Error("Data not found" );
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
    if(updateResult === 0){
      throw Error("Data not found" );
    }
    let data = await ProductDao.findOne(id)
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async deleteById(req, res) {
    const id = req.params.id;
    let result = await ProductDao.destroy(id);
    if (result === 0) {
      throw Error("Data not found" );
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data:null });
    return result
  }
}

export default new ProductService();
