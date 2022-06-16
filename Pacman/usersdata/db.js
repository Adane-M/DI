const knex = require('knex');

const db = knex({
  client:'pg',
  connection:{
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'romy2401',
    database: 'hackaton#2'
  }
})
db('users')
    .select('user_name')
    .where({ id: 1 })
    .then(rows => {
        console.log(rows);
    });

    // const db = require('knex')({
    //     client: 'pg',
    //     connection: {
    //       host : 'ec2-52-201-124-168.compute-1.amazonaws.com',
    //       port : 5432,
    //       user : 'ahfljrwbbxogpn',
    //       password : 'd6e955cc88f06ba2b1fbd1a55a1975903e30071207cf3e09f171165a6d3c57cb',
    //       database : 'da3jq7nlcqoj5e',
    //       ssl: { rejectUnauthorized: false }
    //     }
    //   });
    

  // db('users')
  // .insert([
  //   {country:'New Dddd'},
  //   {country:'New Eee'}
  // ])
  // .where({user_name:'ffff'})
  // .update({score:20000})
  // .returning('*')
  // .select('country_id','country')
  // .del()
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err);
  // })

function createUser({user_name}){
  return db('users').insert(
    {
      user_name:user_name,
    }
  )
  .returning('*')
}

module.exports = {
  createUser
}

// const { Client } = require('pg');
// const pg = new Client({
//     host: 'localhost',
//     port: '5432',
//     user: 'postgres',
//     password: 'romy2401',
//     database: 'hackaton#2'
// });
// pg.connect();
// pg.query(`select * from users` , (err , res) => {
//     if(err) {
//         console.log('error', err.message);
//     }
//     console.log(res.rows);
//     pg.end();

// })
