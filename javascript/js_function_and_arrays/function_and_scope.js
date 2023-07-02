// there are 2 type of scope -> function scope and global scope

var name = 'rahul'; // the scope of this variable is global .. it can be accessed anywhere

function name(){
    var name1 = 'rahul'; // the scope of this variable is only to this function...
}

// execution context

/*

every code in JS associated with execution context, means the environment where the code is being run

*/

var nameOne = 'rahul'; // the execution context of this variable is global execution context

/**
 
In variable global execution context we have :-

1)  variable environment
2)  this

In function global execution context we habe :-

1)  variable environment
2)  this
3)  reference to the outer environment

so we have multiple execution context

 */

/*

Now we have execution stack -> like we have call stack

execution stack maintain all the list of execution context.
so the first is

1)  global execution context


*/

function c(){
    console.log('inside c');
}

function b(){
    c();
    console.log('inside b');
}

function a(){
    b();
    console.log('inside a');
}

a();
console.log('global execution context');


function multiply(a, b){
    return a*b;
}

console.log(multiply);
console.log(multiply(2, 4));
console.log(multiply(3));
console.log(multiply());

/*

"multiply" is a variable that stores the address of a function which takes two input and return an output. 
When we have to execute the function we need to make a function call by adding () at the end of the variable 
name that stores the address of that function. 
If we simply console.log(function-name) then it will display the content that is stored at the address 
stored by variable. 
In this case we are using console.log(multiply) so this will print function body that is stored at the address 
contained by variable "multiply". 
If we use console.log(multiply(2,4)) then we are calling the function and output will be the data 
returned by the function and that is 8. 

*/