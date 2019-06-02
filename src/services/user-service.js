import '@babel/polyfill';
import UserDao from '../dao/user-dao'

class UserService {
  async all(req, res) {
    const users = await UserDao.findAll({order: [['id','ASC']] });
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data: users });
    return users
    // UserDao.findAll({order: [['id','ASC']] }).then(users=>{
    //   process.env.NODE_ENV !== 'test' && res.status(200).json({ data: users });
    //   return users
    // });
  }
  async create(req, res) {
    const user = req.body;
    const data = await UserDao.create(user);
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async findById(req, res) {
    const id = req.params.id;
    const data = await UserDao.findOne(id);
    if (!data) {
      throw Error("Data not found" );
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async update(req, res) {
    const id = req.params.id;
    let result = await UserDao.update(req.body,id)
    let updateResult = result[0]
    //  ('Mi result is ->>',result)
    if(updateResult === 0){
      throw Error("Data not found" );
    }
    let data = await UserDao.findOne(id)
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async deleteById(req, res) {
    const id = req.params.id;
    const data = await UserDao.destroy({ where: {id} });
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
}

export default new UserService();
