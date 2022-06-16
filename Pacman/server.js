const exp = require('express');
const bp = require('body-parser');
const DB = require('./usersdata/db')
const knex = require('knex');
const { max } = require('pg/lib/defaults');
const app = exp();

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());

app.use('/', exp.static(__dirname + '/PacMan'));

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'romy2401',
        database: 'hackaton#2'
    }
})


app.post('/user', (req, res) => {
    console.log(req.body);
    DB.createUser(req.body)
        .then(data => {
            console.log('1insert', data);
            res.send({ message: 'OK' })
        })
        .catch(err => {
            res.send({ message: err.detail })
        })

});

app.get('/show', (req, res) => {
    db('users')
        .select('user_name', 'score')
        .then(data => {
            console.log('2-show-', data);
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
});

app.post('/find', (req, res) => {
    console.log(req.body);
    const { user } = req.body;
    db('users')
        .select('user_name')
        .where({ user_name: `${user}`})
        .then(data => {
            console.log('3-find', `${data.user_name , data.score}`);
            if (data.length > 0) {
                res.send({ message: `Found=> ${data.user_name}` })
            }
            else {
                res.send({ message: 'Not Found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
});



app.listen(5500, () => console.log('listen port 5500'))
