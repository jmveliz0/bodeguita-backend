import UserController from '../routes/controllers/user-controller';
import ProductController from '../routes/controllers/product-controller';
import CategoryController from '../routes/controllers/category-controller';
import UserProductController from '../routes/controllers/user-product-controller';

export default app => {
  app.use('/user', UserController);
  app.use('/product', ProductController);
  app.use('/user_product', UserProductController);
  app.use('/category', CategoryController);
};
