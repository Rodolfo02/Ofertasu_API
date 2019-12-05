const app = require('../src/app');
const http = require('http');
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

const server = http.createServer(app);

server.listen(port);
//console.log('API rodando na porta ', port);
