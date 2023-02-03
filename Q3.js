const fs = require('fs');
const request = require('request');
request('http://www.google.com', function (error, response, body) {

  fs.writeFile(`./index.html`,`${body}`,'utf-8',(error)=>{
      if(error)
      return console.log(error);

      console.log('Homepage Downloaded');
  })
});