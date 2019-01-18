let obj = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true,
  };

 for (let key in obj)
   console.log(obj + ' : ' + key);
   
   
   
   
   
   /////



   let obj = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true,
  };

 for (let key in obj)
   console.log(obj + ' : ' + key);




/////
   var data =  {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    isJedi: true,
  };

   var newData = Object.keys(data).reduce(function(obj,key){
      obj[ data[key] ] = key;
      return obj;
   },{});
   console.log(newData);