function MetadataParser(version,channel,keyField){
    this._version=version;
    this._channel=channel;
    this._keyField=keyField;
  };
  MetadataParser.prototype.setVersion = function(version){
    this._version=version;
  };
  MetadataParser.prototype.setChannel = function(channel){
    this._channel=channel;
  };
  MetadataParser.prototype.setKeyField = function(keyfield){
    this._keyfield=keyfield;
  };
  
  MetadataParser.prototype.getVersion = function(){
    return this._version;
  };
  MetadataParser.prototype.getChannel = function(){
    return this._channel;
  };
  MetadataParser.prototype.getKeyField = function(){
    return this._keyField;
  };
  const person = new MetadataParser('16.1.1.1.3','C',10.1);
  console.log(person.getVersion(),person.getChannel(),(person.getKeyField()));
  person.setVersion('16.1.1.1.4')
  person.setChannel('D');
  person.setKeyField(10.2);
  console.log(person.getVersion(),person.getChannel(),(person.getKeyField()));