import '@babel/polyfill';
import UserProductDao from '../dao/user-product-dao'

class UserProductService {
  all(req, res) {
    return UserProductDao.findAll().then(data=>{
      res.status(200).json({ data: users });
      return users
    });
  }
  create(req, res) {
    return UserProductDao.create(req.body).then(data=>{
      res.status(201).json({ data });
      return data
    });
  }
  findById(req, res) {
    const id = req.params.id;
    return UserProductDao.findOne(id).then(data=>{
      if (!data) {
        throw Error("Data not found" );
      }
      res.status(200).json({ data });
      return data
    });
  }
  update(req, res) {
    const id = req.params.id;
    return UserProductDao.update(req.body,id).then(result=>{
      if(result[0] === 0){
        throw Error("Data not found" );
      }
      return UserProductDao.findOne(id)
      
    }).then((data)=>{
      res.status(201).json({ data });
      return data
    })
  }
  deleteById(req, res) {
    const id = req.params.id;
    return UserProductDao.destroy(id).then(result =>{
      if (result === 0) {
        throw Error("Data not found" );
      }
      res.status(200).json({ data:null });
      return result
    })
  }
}

export default new UserProductService();
