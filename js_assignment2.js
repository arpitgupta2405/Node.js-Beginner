function MetadataParser(version,channel,keyfield){
   this._channel=this.setChannel(channel);
   this._version=this.setVersion(version);
   this._keyfield=this.setKeyField(keyfield);
}  
MetadataParser.prototype.setVersion = (version) =>_version=version;
MetadataParser.prototype.setChannel = (channel) => _channel=channel;
MetadataParser.prototype.setKeyField = (keyfield) => _keyfield=keyfield;

MetadataParser.prototype.getVersion = ()=>{ 
    return _version;
};
MetadataParser.prototype.getChannel = ()=>{ 
    return _channel;
};
MetadataParser.prototype.getKeyField = ()=>{ 
    return _keyfield;
};
const person = new MetadataParser('1.0.0',2,'engineer');
console.log(person.getVersion());