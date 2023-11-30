console.log(isPositive)
console.log(isPositive(12))
function isPositive(num){
    return num>0
}


console.log(typeof isPositive)

function greet(name = "No Name"){
    console.log("hi ",name )
}
greet("Ram")
greet()

let isEven = function(num = 10){
    return num%2 == 0
}
console.log(isEven())

let arr = [10,20,50,90,40,20]
let findsum = function(){
    let sum = 0
    for(let i=0; i<arr.length ; i++){
        sum += arr[i]
    }
    return sum
}
console.log(`sum of ${arr} is ${findsum()}`)