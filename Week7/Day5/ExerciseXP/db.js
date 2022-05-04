const db = require('knex')({
    client: 'pg',
    connection: {
      host : 'ec2-52-201-124-168.compute-1.amazonaws.com',
      port : 5432,
      user : 'ahfljrwbbxogpn',
      password : 'd6e955cc88f06ba2b1fbd1a55a1975903e30071207cf3e09f171165a6d3c57cb',
      database : 'da3jq7nlcqoj5e',
      ssl: { rejectUnauthorized: false }
    }
  });

db('country')
    .select('country', 'country_id')
    .where({ country: 'Israel' })
    .then(rows => {
        console.log(rows);
    });

  // db('country')
  // // .insert([
  // //   {country:'New Dddd'},
  // //   {country:'New Eee'}
  // // ])
  // .where({country_id:201})
  // // .update({country:'New Era'})
  // .returning('*')
  // // .select('country_id','country')
  // .del()
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(err => {
  //   console.log(err);
  // })