var a = 10;
var b = 20;

console.log('before swap :-  a: ', a, 'b: ',b);

// there are two methods to swap the value

var c;
c = a;
a = b;
b = c;

console.log('after swap :-  a: ', a, 'b: ',b);

// another method is

a = 10;
b = 20;

a = a + b; // 30
b = a - b; // 30 - 20 = 10
a = a - b; // 30 - 10 = 20 

console.log('after swap :-  a: ', a, 'b: ',b);