var fs = require('fs');
var parse = require('xml-parser');
const xmlToJs = (xml) => {
        //var xml = fs.readFileSync(dir,'utf8');
        var inspect = require('util').inspect;
        var obj = parse(xml);
        return (inspect(obj, { colors: true, depth: Infinity }));
}
module.exports=xmlToJs;

