import '@babel/polyfill';
import * as Messages from '../utils/message-constants';
import UserDao from '../dao/user-dao'

class UserService {
  async all(req, res) {
    const users = await UserDao.findAll({order: [['id','ASC']] });
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data: users });
    return users
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
      throw Error(Messages.DATA_NOT_FOUND);
    }
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
  async update(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const body = req.body;
    const user = await UserDao.findOne({
      where
    });
    if (!user) {
      throw Error(Messages.USER_NOT_FOUND);
    }
    const data = await user.update(body);
    process.env.NODE_ENV !== 'test' && res.status(201).json({ data });
    return data
  }
  async deleteById(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const data = await UserDao.destroy({ where });
    process.env.NODE_ENV !== 'test' && res.status(200).json({ data });
    return data
  }
}

export default new UserService();
