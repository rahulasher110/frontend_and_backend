/*
The Body Mass Index (BMI) is the ratio of the weight of a person(in kilograms) to 
the square of the height(in meters)

Formula To Calculate Body Mass Index (BMI)
BMI = weight / (height x height);

BMI Category	    BMI
Underweight	below   18.5
Healthy	            18.6 to 24.9
Overweight	        25 to 25.9
Obese	            Obese 30 or greater


Input Data
    Weight 58kg and height 1.60m
Expected Output
    Your Body Mass Index is: 22.656249999999996 and
    You are Healthy.
*/

var weight = 58;
var height = 1.60;

var bmi = weight / (height * height);

if(bmi <= 18.5){
    console.log('Your Body Mass Index is: ',bmi, ' and');
    console.log('You are Underweight below.');
}
else if(bmi <= 24.9){
    console.log('Your Body Mass Index is: ',bmi, ' and');
    console.log('You are Healthy');
}
else if(bmi <= 25.9){
    console.log('Your Body Mass Index is: ',bmi, ' and');
    console.log('You are Overweight');
}
else{
    console.log('Your Body Mass Index is: ',bmi, ' and');
    console.log('You are Obese');
}