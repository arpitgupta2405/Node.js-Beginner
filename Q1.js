const fs= require("fs");
const xmlparser=require("./xmlparser");

fs.readFile('XML.xml','utf8',(err,data)=>{
    if(err)
    return console.log('File not found');
    var xml=data;
    var json=xmlparser(xml);
    console.log(json);
})