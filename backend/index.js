const express = require('express');
const pg = require('pg');

const app = express();

// Initialise postgres client
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
  
const queryString = 'SELECT * from users'
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

app.listen(3000);