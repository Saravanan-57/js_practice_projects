// let name = String(prompt("Name"))
// console.log(name, "hi")
let a = "first word of sara "
let b = "second word of MSW"

let fname = "Saravanan"
let sname = "III B. Sc IT"
let city = "KSP"

console.log(fname + " " + sname + " lives in "+ city)
let msg = `${fname} ${sname} lives in  ${city}`
console.log(msg)

let items = 5
let bill_amt = 95
console.log(`you have ${items} in your cart
Your Bill amt is $${bill_amt}`)

let cities = ["Chennai", "cbe", "pollachi"]

let arr = [2,3,4,5,6,"a", "b", [1,"c"]]

let matrix = [[1,3,4], [9,8,7], [2,5,6]]

console.log(cities)
arr.splice(2,1,"aa")
console.log(arr)
arr.splice(1,0,"b")
console.log(arr)
console.log(arr.slice(2,5))
let arr2 = arr
let str = arr.join()

console.log(str)

let str3 = str.split(",")
console.log(str3)
console.log(arr2 == arr)

let arr5 = [1,3,4]
let arr6 = [5,6,7]

let arr7=arr5.concat(arr6)
console.log(arr7)
let  arr8 = [...arr5,...arr6]
console.log(arr8)



