import { User } from '../db/postgres/index';
import '@babel/polyfill';
import * as Messages from '../utils/message-constants';

class UserService {
  async all(req, res) {
    const where = req.parsedQuery;
    const users = await User.findAll({order: [['id','ASC']], where });
    res.status(200).json({ data: users });
  }
  async create(req, res) {
    const user = req.body;
    const data = await User.create(user);
    res.status(201).json({ data });
  }
  async update(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const body = req.body;
    const user = await User.findOne({
      where
    });
    if (!user) {
      throw Error(Messages.USER_NOT_FOUND);
    }
    const data = await user.update(body);
    res.status(201).json({ data });
  }
  async deleteById(req, res) {
    const id = req.params.id;
    const where = Object.assign(req.parsedQuery, { id });
    const data = await User.destroy({ where });
    res.status(200).json({ data });
  }
}

export default new UserService();
