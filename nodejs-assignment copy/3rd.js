const fs = require('fs');
const request = require('request');
request('http://www.google.com', function (error, response, body) {
  
  fs.writeFile(`./homepage.html`,`${body}`,'utf-8',(error)=>{
      if(error)
      return error;

      console.log('downloaded');
  })
});