// Scopes in JavaScript
// var c = 30 // Global scope

let a = 300 

if (true){
    let a = 10 //block scope
    const b = 20
    // console.log("INNER :",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "kunal"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one ()


if (true){
    const username = "kunal"
    if(username === "kunal"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// ************************ Interesting example ************************



console.log(addone(5));
function addone(num){
    return num + 1
}


addtwo(5) // console.log(addtwo(5)); // ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function (num){
    return num + 2
}


