var a = 10;

if(a > 0){
    console.log('a is +ve');
}
else if(a < 0){
    console.log('a is -ve');
}
else{
    console.log('a is zero');
}

a = -1;
if(a){
    console.log(true);
}
else{
    console.log(false);
}

a = 0;
if(a){
    console.log(true);
}
else{
    console.log(false);
}

a = '';
if(a){
    console.log(true);
}
else{
    console.log(false);
}

a = 'dfdsf';
if(a){
    console.log(true);
}
else{
    console.log(false);
}

var b;
if(b){
    console.log(true);
}
else{
    console.log(false);
}

b = null;
if(b){
    console.log(true);
}
else{
    console.log(false);
}

console.log(null == undefined);