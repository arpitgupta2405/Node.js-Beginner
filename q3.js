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
  function groupObjectsBy(arr,key){
    let ans=new Map();
    for(let i=0;i<arr.length;i++){
      if(!ans.has(arr[i][key])){
        const temp=[];
        temp.push(arr[i]);
        ans.set(arr[i][key],arr[i]);
      }
      else{
        const temp=[];
        temp.push(ans.get(arr[i][key]));
        temp.push(arr[i]);
        ans.set(arr[i][key],temp);
        
      }
    }
    return ans;
  }
  console.log(groupObjectsBy(arr,"channel"));