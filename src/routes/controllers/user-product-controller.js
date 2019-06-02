
import express from 'express';
import 'express-async-errors';
import UserProductService from '../../services/user-product-service';

const router = express.Router();

router
  .route('/')
  .get(UserProductService.all)
  .post(UserProductService.create);

router
  .route('/:id')
  .get(UserProductService.findById)
  .patch(UserProductService.update)
  .delete(UserProductService.deleteById);

export default router;
