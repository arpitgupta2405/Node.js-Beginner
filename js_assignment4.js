const SortArray =function (orignalArray){
    this.temp_array=orignalArray;
}
SortArray.prototype.getSortedArray=function(){
    let new_array=this.temp_array.sort((a,b)=> a-b);
    return new_array ;
};

const SortObjectArray = function(orignalArray){
  SortArray.call(this,orignalArray);
}
SortObjectArray.prototype=Object.create(SortArray.prototype);

SortObjectArray.prototype.getSortedObjectArray=function(key){
  let new_array=[];
  if(key=="")
   return this.getSortedArray();

  if(typeof(this.temp_array[0][key])==="number")
  { 
    new_array=this.temp_array.sort(function(a,b) { 
         return (a[key]-b[key]);
    });
  }
  else
  { console.log("team1");
    new_array=this.temp_array.sort(function(a,b){
        return (a[key]>b[key]);
    });
  }
  return new_array;
}
let input_array = [4,2,3,1];
//let inputarra
let arry= new SortObjectArray(input_array);
console.log(arry.getSortedObjectArray(""));

