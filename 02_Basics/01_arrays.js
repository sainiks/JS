// arrays 

const myarr = [0,1,2,3,4,5]
const myheros = ["shaktiman","naagraj"]
const myarr2 = new Array(1,2,3,4,5)
// console.log(myarr[5]);

// arrays methods 

// myarr.push(6)
// myarr.push(7)
// myarr.pop()

// myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newarr= myarr.join()
 
// console.log(myarr);
// console.log(newarr);

// slice , splice 

console.log("A ",myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ",myarr);

const myn2 = myarr.splice(1,3)
console.log("C ",myarr);
console.log(myn2);

