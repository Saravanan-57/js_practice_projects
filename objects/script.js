let item = {
name:"phone",
price : 25000,
quantity : 1,
MYFUNC(){
    console.log("this is function")
}
}
let func = item.MYFUNC()

let resdiv = document.createElement("div")
resdiv.id = "result"
document.getElementById("body").appendChild(resdiv)
document.getElementById("result").innerHTML = JSON.stringify(item)
console.log(item)
let item2 = new Object();
item2.name = "charger"
item2.price = 700
item2.quantity = 2

console.log(item2.price)
item2.price = 500
item.MYFUNC()