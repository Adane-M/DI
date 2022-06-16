const date = require('./main');
const http = require('http');
let cd = date.currDate();

const server = http.createServer((request, response) => {
    console.log(request.url);  
    response.setHeader(`content-Type`, `text/html`);
    response.write(`The date and time are currently : `);
    response.end(cd);
})
server.listen(8080);