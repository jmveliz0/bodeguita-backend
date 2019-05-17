import '@babel/polyfill';
import * as Messages from '../utils/message-constants';
import { Product } from '../db/postgres/index';

class ProductService {
  async all(req, res) {
    const where = req.parsedQuery;
    const data = await Product.findAll({order: [['id','ASC']], where });
    res.status(200).json({ data });
  }
  async findById(req, res) {
    const where = { id: req.params.id };
    const data = await Product.findOne({ where });
    if (!data) {
      throw Error(Messages.DATA_NOT_FOUND);
    }
    res.status(200).json({ data });
    
  }
  async create(req, res) {
    const product = req.body;
    product.abrev = product.name[0]
    const data = await Product.create(product);
    res.status(201).json({ data });
    return req
  }
  async update(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const body = req.body;
    const object = await Product.findOne({
      where
    });
    if (!object) {
      throw Error(Messages.DATA_NOT_FOUND);
    }
    const data = await object.update(body);
    res.status(201).json({ data });
  }
  async deleteById(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const data = await Product.destroy({
      where
    });
    if (!data) {
      throw Error(Messages.DATA_NOT_FOUND);
    }
    res.status(200).json({ data });
  }
}

export default new ProductService();
