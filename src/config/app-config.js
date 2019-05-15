import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import Sequelize from 'sequelize';
import queryParams from 'express-query-params';
import { handleError, jsonAsyncBody } from '../routes/middlewares/app-middleware';
import mung from 'express-mung';
import i18n from 'i18n';
import path from 'path';
import cookieParser from 'cookie-parser';
import createLocaleMiddleware from 'express-locale';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

export default (app, loadFirst) => {
  if (loadFirst) {
    app.disable('x-powered-by');
    app.use(logger('combined'));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    app.use(cors());
    app.use(createLocaleMiddleware());
    app.use(
      queryParams({
        format: 'sequelize',
        sequelizeOp: Sequelize.Op
      })
    );
    app.use(mung.json(jsonAsyncBody));
    i18n.configure({
      locales: ['en', 'es'],
      defaultLocale: 'es',
      cookie: 'translations',
      directory: path.join(__dirname, '../i18n'),
      autoReload: true,
      objectNotation: true
    });
    app.use(cookieParser());
    app.use(i18n.init);
  } else {
    app.use(handleError);
  }
};
