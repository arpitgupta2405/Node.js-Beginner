  let arrayOfJson =[ 
    {
      "channel": "A" ,
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
  ];
  function groupObjectBy(arrayOfJson,key){
      let set_channel= new Set();
      arrayOfJson.forEach(function(Json){
          set_channel.add(Json[key]);
      });
      let answer_object=new Map();
      const myIterator=set_channel.values();
      for(const entry of myIterator){
          let temp_array=[];
          arrayOfJson.forEach(function(Json){
            if(Json[key]===entry)
            {
                temp_array.push(Json);
            }
        });
        answer_object.set(entry,temp_array);
      }
      return answer_object;
  };
  console.log(groupObjectBy(arrayOfJson,"channel"));

