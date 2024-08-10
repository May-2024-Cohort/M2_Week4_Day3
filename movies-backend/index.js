// importing in node
let colors = require("colors")

let jsonServer = require('json-server')
const morgan = require('morgan');



let server = jsonServer.create()

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(morgan('dev'));
server.use((req, res, next) => {
  // Middleware to disable CORS
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
server.use(router);




server.listen(8000, () => {
    console.log(`JSON Server is running at port 8000`);
  });
