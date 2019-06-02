import express from 'express';
import appConfig from './config/app-config';
import routes from './routes/routes';

// let _server;

// const server = {
//   start() {
//     const app = express();
//     appConfig(app, true);
//     routes(app);
//     appConfig(app);
//     return app
//   },
//   async startServer(app){
//     _server = await app.listen(3000);
//     console.log(`servidor abierto en http://localhost:${3000}`);
//   },
//   close() {
//     _server.close();
//   }
// };

// export default server;

// if (!module.parent) {
//   if(process.env.NODE_ENV === "dev"){
//     let app = server.start()
//     server.startServer(app)
//   }else if(process.env.NODE_ENV === "test"){
//     console.log("Entre a test")
//     server.start()
//   }
// }


const app = express();
appConfig(app, true);
// app.use('/',(req,res)=>{
//   res.status(200).json({data:'Hello'})
// });
routes(app);
appConfig(app)
// app.listen(3000)
export default app;
