import '@babel/polyfill';
import UserProductDao from '../dao/user-product-dao'

class UserProductService {
  async all(req, res) {
    const users = await UserProductDao.findAll({order: [['id','ASC']] });
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data: users });
    return users
  }
  async create(req, res) {
    const user = req.body;
    const data = await UserProductDao.create(user);
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async findById(req, res) {
    const id = req.params.id;
    const data = await UserProductDao.findOne(id);
    if (!data) {
      throw Error("Data not found" );
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async update(req, res) {
    const id = req.params.id;
    let result = await UserProductDao.update(req.body,id)
    let updateResult = result[0]
    //  ('Mi result is ->>',result)
    if(updateResult === 0){
      throw Error("Data not found" );
    }
    let data = await UserProductDao.findOne(id)
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async deleteById(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const data = await UserProductDao.destroy({ where });
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
}

export default new UserProductService();
