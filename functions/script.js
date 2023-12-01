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
let l,b,h = 0
let volume = (l=10,b=20,h=1) => {return l*b*h}

console.log(volume())

const fsum = (arr) => {
    let sum = 0
    for(let val of arr){
        sum += val
    }
    return sum
}
console.log(fsum(arr))
console.clear()

let prod = function(...args){
    let res = 1
    for(val of args){
        res *=val
    }
    return res


}
console.log(prod(10,20,30,40))
console.clear()
//generators

function* indexvalue(){
    let index = 1
    while(true){
        yield index++
    }
}
let gen = indexvalue();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

//callback 

function greetConsole(Name){
    console.log("Hello" , Name)
}
function greetHeading(Name){
    const heading = document.querySelector("h1")
    heading.innerHTML = "Hello " + Name
}

function greeet(callback){
    callback("Saravanan")
}

greeet(greetConsole)
// greeet(greetHeading)
let arrrr = ["Dean", "Roman", "Seth"]
arrrr.forEach(
    val =>{
        console.log(val.toUpperCase())
    }
)

// function print(val){
//     console.log(val.toUpperCase())
// }

arrrr.forEach((val, index, arrrr) =>
{
    arrrr[index] = val.toUpperCase()
}
)

console.log(arrrr)

let myArr = ["Chennai ", "Brazil", "Kuniyamuthur", "German"]

myArr.forEach(val => {
    const opt = document.createElement("option")
    opt.textContent = val
    opt.value =val
    document.getElementById("selectID").appendChild(opt)
})


myArr.forEach(val =>{
    const li = document.createElement("li")
    li.textContent = val
    document.getElementById("lists").appendChild(li)
})