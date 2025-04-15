// Function is a block of code that performs a specific task.
// Function is a reusable piece of code.
// Function is a set of statements that performs a task or calculates a value.
// Function Declaration
function sayMyName(){
    console.log('K');
    console.log('U');
    console.log('N');
    console.log('A');
    console.log('L');
}

// sayMyName()

// Ways to declare a function

// Way No:- 1.
// function addTwoNumbers(number1 , number2){ // function addTwoNumbers(parameters)
    // console.log(number1 + number2);
// }

// addTwoNumbers(3,4) // addTwoNumbers(arguments)
// addTwoNumbers(5,"k") // arguments
// addTwoNumbers(5,null) // arguments

// Way No:- 2.
// function addTwoNumbers(number1 , number2){
    // let result = number1 + number2; 
    // return result; // return statement
// } 

// Way No:- 3.
function addTwoNumbers(number1 , number2){
    return number1 + number2; // return statement
} 
const result = addTwoNumbers(3,5)
// console.log("Result :",result)


function loginUserMessage(username = "Anonymous"){
    if(!username){
        return "Please enter a username";
    }
    return `${username}!! just logged in our system`;
}

// console.log(loginUserMessage("kunal saini"));
// console.log(loginUserMessage());

function calculateCarPrice(val1 , val2 ,...num1){
    return num1 
}

// console.log(calculateCarPrice(200 , 400 ,330 ,440))


const user ={
    username : "Kunal",
    prices: 999,
}

function handleobject(anyobject){
    console.log(`Username is : ${anyobject.username} and price is : ${anyobject.price}`);
    
}

// handleobject(user)
handleobject({
    username : "Kunal",
    price: 999,
})

const myNewArray = [200, 400 ,100, 600]

function returnSecondValue(getarray){
    return getarray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400 ,500, 1000]))