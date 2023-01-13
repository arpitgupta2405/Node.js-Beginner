const SortArray = function(arr){
    this.originalArray=arr;
  };
  SortArray.prototype.getSortedArray=function(){
    let temp=this.originalArray.sort((a,b)=> a-b);
    return temp;
  };
  const temp=[5,4,3,2,1];
  const ans=new SortArray(temp);
  console.log(ans.getSortedArray());
  const SortObjectArray=function(arr,key){
    this.originalArray=arr;
    this._key=key;
  }
  SortObjectArray.prototype=Object.create(SortArray.prototype);
  SortArray.prototype.getSortedArray=function(){
    let temp=this.originalArray.sort((a,b)=> a[this._key]>b[this._key]?1:-1);
    return temp;
  };
  let arr=[
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ]
  const ans1=new SortObjectArray(arr,"name");
  console.log(ans1.getSortedArray());