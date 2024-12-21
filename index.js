const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);  // Đảm bảo json-server có thể phân tích JSON

const port = process.env.PORT || 8080;
server.use(router);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
