// const tinderUser = new Object()// this is how we create an object using constructor function
// this is a singleton object 


const tinderUser = {}
// this is how we create an object using object literal
// this is not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "kunal"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'kunal', isLoggedIn: false }

const regularUser ={
    email:  "anyone@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "kunal",
            lastname: "saini"
        }
    }
}

// console.log(regularUser); // { email: 'anyone@gmail.com', fullname: { Userfullname: { firstname: 'kunal', lastname: 'saini' } }}

// console.log(regularUser.fullname.Userfullname.firstname); // kunal
// console.log(regularUser.fullname?.Userfullname.firstname); // 


const obj1 = {1: "a", 2: "b",}
const obj2 = {3: "a", 4: "b",}
const obj4 = {5: "a", 6: "b",}

// const obj3 = {obj1,obj2 } // this is how we shouldn't merge two objects in js
// const obj3 = Object.assign({},obj1, obj2, obj4) // this is how we merge objects in js


const obj3 = {...obj1, ...obj2, ...obj4} // this is how we merge objects in js using spread operator
// console.log(obj3);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



const user =[
    {
        id : 1 ,
        email: "kunalsaini@gmail.com",
    },
    {
        id : 2 ,
        email: "kunalsaini@google.com",
    },
    {
        id : 3 ,
        email: "kunalsaini@chatgpt.com",
    },
]


user[1].email
console.log(user[1]["email"]); // output is :-
// this is how we access the object in an array



console.log(tinderUser); // { id: '123abc', name: 'kunal', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // to get the keys of the object
console.log(Object.values(tinderUser)); // to get the values of the object
console.log(Object.entries(tinderUser)); // to get the entries of the object

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // to check if the object has the property or not
