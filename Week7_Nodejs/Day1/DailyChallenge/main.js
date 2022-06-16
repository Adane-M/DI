const bigNum = require(`./script`);
const http = require(`http`);

const b = 5;
let sum = b + bigNum.largeNumber;

const server = http.createServer((request, response) => {
response.setHeader(`content-Type`, `text/html`);
response.write(`my module is: \n ${sum}`)
response.end('<h1> Hi there at the frontend </h1>')
});
server.listen(3000);



