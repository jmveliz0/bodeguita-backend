import express from 'express';
import appConfig from './config/app-config';
import routes from './routes/routes';

let _server;
const server = {
  async start() {
    const app = express();
    appConfig(app, true);
    routes(app);
    appConfig(app);
    
    _server = await app.listen(3000);
    console.log(`servidor abierto en http://localhost:${3000}`);
  },
  close() {
    _server.close();
  }
};

export default server;

if (!module.parent) {
  server.start();
}
