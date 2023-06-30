/*
Given a number N, print sum of all even numbers from 1 to N.
Input Format :
    Integer N

Output Format :
Required Sum 
    Sample Input 1 : 6
    Sample Output 1 : 12

*/

var n = 6;
var sum = 0;

for(var i=0; i<=n; i += 1){
    if(i % 2 == 0){
        sum += i;
    }
}
console.log('sum of all even numbers :- ',sum);