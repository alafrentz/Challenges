//test 1
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
   b = [];

   for (let a = 0; a <= 10; a += 2) {

      console.log(a)
   }

   for (let b = 1; b <= 10; b += 2) {

       console.log(b)

   }

   //test2

   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


   for (var i = 0; i < arr.length; i++) {
     if (arr[i]%1 == 0) {
       arr.push(arr.splice(i, 1)[0]);
     }
   }

   console.log(arr);

   //test 3


   let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((number) => number%2!==0);
   console.log(oddNumbers);

   let evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((number) => number%2!==1);
   console.log(evenNumbers);

