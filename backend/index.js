const express = require('express');
const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded( {extended: true} )); //Parse URL-encoded bodies

// Initialise postgres client
const pg = require('pg');
const config = {
  host: '127.0.0.1',
  database: 'sam-dev',
  port: 5432
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

app.get('*', (request, response) => {
  const queryString = 'SELECT * from users';
  pool.query(queryString, (err, result) => {
    if (err) {
      console.error('query error:', err.stack);
      response.send( 'query error' );
    } else {
      console.log('query result:', result);

      // redirect to home page
      response.send( result.rows );
    }
  });
});

app.post('/wildcard', async (request, response) => {
  let data = request.body;
  console.log(data);

  if (data.mode == 'sql') {
    try {
      let result = await SQLquery(data.queryString)
      console.log(result)
      if (result) {
        response.send(result);
      } else {
        response.send("No results")
      }
    } catch(err) {
      response.send("SQL Error");
    }
  }
});

function SQLquery(queryString){
  console.log('Executing: ' + queryString);
  
  return new Promise((resolve, reject) => {
    pool.query(queryString, (err, result) => {
      if (err) {
        console.log(err.stack);
        reject(err.stack);
      } else {
        console.log('Query success');
        //console.log(result.rows);
        resolve(result.rows);
      }
    });
  })
}

app.listen(3000, ()=> {console.log("Listen 3000")});