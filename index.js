const jsonServer = require("json-server");//es5 // importing json-server librar

// import jsonServer from "json-server"

const server = jsonServer.create(); // created

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001; // you can use any port number here;


server.use(middlewares);

server.use(router);

server.listen(port);


//create()

// router(db.json)

// defaults()
