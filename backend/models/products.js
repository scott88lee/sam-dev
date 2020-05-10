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