function MetadataParser(version,channel,keyfield){
   this._channel=0;
   this._version="";
   this._keyfield="";
   this.setVersion(version);
   this.setChannel(channel);
   this.setKeyField(keyfield);
}  
MetadataParser.prototype.setVersion = function(version){
    this._version=version;
}
MetadataParser.prototype.setChannel = function(channel){
    this._channel=channel;
}
MetadataParser.prototype.setKeyField = function(keyfield){
    this._keyfield=keyfield;
}

MetadataParser.prototype.getVersion = function(){ 
    return this._version;
};
MetadataParser.prototype.getChannel = function(){ 
    return this._channel;
};
MetadataParser.prototype.getKeyField = function(){ 
    return this._keyfield;
};
const person = new MetadataParser('1.0.0',2,'engineer');
console.log(person.getVersion());
console.log(person.getChannel());
console.log(person.getKeyField());