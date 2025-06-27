
//Array Specific Loops

// for of loop
// ["" , "" , ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5];

// for (const num of arr) {
    // console.log(num);
// }


// const greetings = "Hello World!";
// for (const greet of greetings) {
    // console.log(`Each character is : ${greet}`);
// }


// const greeting = "Hello World!";
// for (const greet of greeting) {
    // if(greet == ' '){
        // continue;  // Skip spaces
    // }
    // console.log(`Each character is : ${greet}`);
// }




//________________ Maps _________________

const map = new Map()

map.set('in', 'India');
map.set('us', 'United States of America');
map.set('fr', 'France');
map.set('in', 'India');

// console.log(map);

// for (const [key , value] of map) {
    // console.log(key, ':-', value);
// }
// maps are iterable, so we can use for of loop to iterate through them



myobject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

for( const [key , value ] of myobject){
    console.log(key, ':-', value);
}




