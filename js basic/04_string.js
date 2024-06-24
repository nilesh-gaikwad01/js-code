//string Operations

let str1 = "Nilesh"  //string addition
let str2 = "gaikwad"
let str3 = '123'

console.log(str1+str2+str3) //Outdated syntax
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //Modern syntax backticks its very Imp

const gamename = new String("nilesh-fc") //By using js string object

console.log(gamename)
console.log(gamename[0]) //access the index value
console.log(gamename.__proto__); // console use 

console.log(gamename.length) //It gives string Length
console.log(gamename.toUpperCase()) //Upercase char
console.log(gamename.indexOf('h')) //Position of char
console.log(gamename.toLowerCase())

const newString = gamename.substring(0,4) //string devide in substring 

console.log(newString)

let anotherString = gamename.slice(0,5) //String slicing done
console.log(anotherString)
console.log(gamename.slice(2,4))
console.log(gamename.slice(-3,4))
console.log(gamename.slice(-2,3))
console.log(gamename.slice(-1,5))

const newOneString = "             HiteshBhaii " // string Trimming - to Cut the Extra spaces between string
console.log(newOneString)
console.log(newOneString.trim())

let url = "https://nileshgaikwad.com/nilesh20Gaikwad" //Replace the string

console.log( url.replace('20','-')); 

console.log(url.includes('sundar')); //

console.log(gamename.split('-')); //split the string


