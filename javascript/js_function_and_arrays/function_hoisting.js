// variable hoisting -> means all the declaration in a function in JS, are actually move to the top of the function

/*

function hoistDemo(){
    console.log(i); // undefined
    var i = 10;
}

the above function can be converted into 

function hoistDemo(){
    var i;
    console.log(i); // undefined
    i = 10;
}


*/

console.log(j); // undefined

function hoistDemo(){
    console.log(i); // undefined
    var i = 10;
}

hoistDemo();


var j = 10;


// function hoisting

sum(2, 4);

function sum(a, b){
    console.log(a);
    console.log(b);
}

// in js variable declaration and function declration are hoisted