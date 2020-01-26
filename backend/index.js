//INITIALISE EXPRESS
const express = require('express');
const app = express();

//MIDDLE-WARE - BODYPARSER
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded( {extended: true} )); //Parse URL-encoded bodies

//ENABLE CORS FOR DEVELOPMENT
const cors = require('cors'); //Enable CORS
app.use(cors())
  
// Initialise postgres client
const pg = require('pg');
const config1 = {
  host: '127.0.0.1',
  database: 'sam-dev',
  port: 5432
};

const awsrds = {
  host: 'sam-dev.cf6awl3jeoo9.ap-southeast-1.rds.amazonaws.com',
  database: 'samima',
  user: 'master',
  password: 'testing123', //not actual passwords
  port: 5432
};

//DATABASE SELECTION
const pool = new pg.Pool(awsrds);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


//START OF ROUTES
app.get('/products', async (req, res) => {
  let queryString = "SELECT * FROM products;"
  console.log("hey");
  try {
    let result = await SQLquery(queryString);
    res.send(result);
  }
  catch (errMSG) {
    console.log("Error")
    res.send("Error: " + errMSG);
  }
})

app.post('/products/new', (req, res) => {
  let data = req.body;
  console.log(data);
  res.send(
    JSON.stringify(data)
    );
});

app.post('/wildcard', cors(), async (request, response) => {
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

app.get('/setup', (request, response) => {
  let queryString = "CREATE TABLE IF NOT EXISTS products (\r\n    product_id SERIAL PRIMARY KEY,\r\n    SKU VARCHAR(30) NOT NULL,\r\n    brand TEXT NOT NULL,\r\n    model TEXT NOT NULL,\r\n    supplier INT NOT NULL,\r\n    description TEXT,\r\n    color TEXT,\r\n    variation TEXT\r\n);"

  SQLquery(queryString);
  response.send('Setting up database...');
  //response.status(404);
  //response.send("404 not found");
});

app.get('*', (request, response) => {
  response.status(404);
  response.send("404 not found");
});


//ASYNC FUNCTIONS
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