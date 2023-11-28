for(var i=0; i<=10 ;i++){
    if (i%3==0)
    continue;//skips the current iteration
    console.log(i)
}

// console.log(i)

// while(true){
//     let num = Number(prompt("Enter a number"))
//     if (!isNaN(num)){
//         break;
//     }
// }
let arr = ["appple", "mango", "banana", "guva"] ;
for(i=0;i<arr.length;i++){
    console.log(arr[i].toLocaleUpperCase())
}

for (var fruit of arr)
    console.log(fruit)

    const myObject = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      };
      
      for (let key in myObject) {
        if (myObject.hasOwnProperty(key)) {
          console.log(`${key}: ${myObject[key]}`);
        }
      }
      