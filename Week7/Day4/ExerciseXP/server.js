const update = require('./views/script') 
const exp = require('express');
const ejsLint = require('ejs-lint');
let Parser = require('rss-parser');

let parser = new Parser();
const app = exp();

const feeds = [];
( async () => {

  let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
//   let feed = await parser.parseURL('https://www.reddit.com/.rss');
  feed.items.forEach(item => {
      
      console.log(item.link)
      item.categories.forEach(catg => {
        feeds.push(catg)
    })

  });
})();

app.set('view engine', 'ejs');
app.use(exp.urlencoded({extended: false}));
app.use(exp.json());
app.use(exp.static('public'));




let lists = []
app.get('/', (req, res) => {
    console.log('render');
    res.render('index', { feeds: feeds , lists});
});

app.post('/lists', (req, res) => {
    const{name , amount} = req.body
    const newItem = {
        name: name ,
         amount: amount 
        }
        lists.push(newItem)
    res.send(lists)
});
app.get('/', (req, res) => {
    // const{name , amount} = req.body
    // const newItem = {
    //     name: name ,
    //      amount: amount 
    //     }
    //     lists.push(newItem)
    // console.log('render');
    res.render('index', lists);
    // res.send(lists)
});


app.listen(3000, console.log('yahoooo!!!'))
