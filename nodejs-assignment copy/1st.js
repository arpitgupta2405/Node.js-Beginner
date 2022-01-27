const fs=require('fs')
const xml2js=require('xml2js')
const util=require('util');

const parser=new xml2js.Parser();
fs.readFile('book.xml',(err,data)=>{
    
    if(err)
    return err;

    parser.parseString(data,(err,result)=>{
        if(err)
        return err;

        console.log(util.inspect(result,false,null,true));
    })
})