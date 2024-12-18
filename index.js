const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);  // Đảm bảo json-server có thể phân tích JSON

// POST endpoint xử lý yêu cầu gửi giỏ hàng
server.post('/cart', (req, res) => {
    console.log('Data received:', req.body);  // Kiểm tra xem dữ liệu có đúng không
    res.status(200).json(req.body);  // Trả lại dữ liệu nhận được
});

const port = process.env.PORT || 8080;
server.use(router);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
