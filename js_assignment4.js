const SortArray =function (orignalArray){
    this.temp_array=orignalArray;
}
SortArray.prototype.getSortedArray=function(){
    let new_array=this.temp_array.sort((a,b)=> a-b);
    return new_array ;
};
//const  arry= new SortArray([2,3,1,4]);
//console.log(arry.getSortedArray());

const SortObjectArray = function(orignalArray){
  SortArray.call(this,orignalArray);
}
SortObjectArray.prototype=Object.create(SortArray.prototype);

SortObjectArray.prototype.getSortedObjectArray=function(key){
  let new_array=[];
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
let input_array = [ { name: "john", age: 22 }, { name: "mark", age: 21 } ];
let arry= new SortObjectArray(input_array);
if(typeof(input_array[0])==="object")
{ 
    console.log(arry.getSortedObjectArray("age"));}
else
{ 
    console.log(arry.getSortedArray());
}

