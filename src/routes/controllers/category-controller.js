import express from 'express';
import 'express-async-errors';
import CategoryService from '../../services/category-service';

const router = express.Router();

router
  .route('/')
  .get(CategoryService.all)
  .post(CategoryService.create);

router
  .route('/:id')
  .get(CategoryService.findById)
  .patch(CategoryService.update)
  .delete(CategoryService.deleteById);

export default router;
