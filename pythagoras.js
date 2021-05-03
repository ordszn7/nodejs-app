/*
    Data types
        1. String
        2. Number
        3. Boolean
        4. Array
        5. Function
        6. Null,
        7. Undefined
        8. Object
        9. Maps
*/

// var firstVar = 'The quick brown fox';
// var secondVar = " jumped over the lazy dog";
// var age = 56;
// var graduate = true;
// var x = 9;
// var y = 8;

// console.log(firstVar);
// console.log(secondVar);
// console.log(`${firstVar} ${secondVar}`)
// console.log(`Your age is ${age}`)
// console.log(typeof(graduate));
// console.log(graduate)

// y = 2x + 3;

// var z = x + y;
// var z = x - y;
// var z = x / y;
// var z = x * y;
// var a = x^2;
// var z = x % y;
// console.log(`a = ${a}`);

// var x = 10;
// var y = 2 * x + 3;
// console.log(`When x is ${x}, y is ${y}`);

// var score = [3,4,5,6,7,3,2];
// var age = new Array(3,4,4);
// var info = new String('there is an infortion');
// var price = new Number(60);

// var employee = {
//     name: 'Olatayo',
//     age: 80,
//     state: 'kwara'
// }

// var listOfEmployee = [
//     {
//         name: 'Olatayo',
//         age: 80,
//         gender: 'male',
//         state: 'kwara'
//     },
//     {
//         name: 'Olawale',
//         age: 80,
//         gender: 'male',
//         state: 'kwara'
//     },
//     {
//         name: 'Kemi',
//         age: 80,
//         gender: 'female',
//         state: 'kwara'
//     }
// ]

// console.log(`${employee['name']} ${employee['age']}`);

// 

// function areaOfTraiangle() {
//     var base = 28;
//     var height = 7;
//     var area = 1/2*base
//     var areaOfTraiangle = area * height;
//     console.log(`Area of a Triangle is ${areaOfTraiangle}`)

// }

// areaOfTraiangle();

// function area(base,height) {         <!--Question 5-->
//         let result = 1/2*base*height
//         console.log(`Area of a Triangle is ${result}`)
// }

// area(12,6);

// Question 6
// function volume(radius) {            
//         let finalVolume = 4/3 * Math.PI * Math.pow(radius,3)
//         console.log(`The volume of a Sphere is ${finalVolume}`)
// }

// volume(6)


// function q10(radius) {               <!--Question 10-->
//         let answer = 4 * Math.PI * Math.pow(radius, 2)
//         console.log(`S = ${answer}`)
// }

// q10(5)

// function areOfCircle(a,b,c) {
//         let answer = Math.pow(a,2) + Math.pow(b,2) / Math.pow(c,2)
//         console.log(answer)
// }

// areOfCircle(2,5,7)


// function pythagoras(a,b){
//         let c = Math.pow(a,2) + Math.pow(b,2);
//         c = Math.sqrt(c);
//         return Math.floor(c);
// }

// var result = pythagoras(2,3);

// console.log(`result = ${result}`); 
//i = i + 2;
// y = 2x + 3 0<=x<=20
// for(var x = 0; x<=20; x++){
//         // console.log(`${i} you are welcome to codetech`);
//         let y = 2 * x + 3;
//         console.log(`when x = ${x} y = ${y}`)
// }

// var counter = 0;
// while(counter <= 20){
//         counter++;
//         if(counter == 10){
//                 // continue;
//                 break;
//         }
//         let y = 2 * counter + 3;
//         console.log(`when x = ${counter} y = ${y}`);
// }

// var counter = 100;
// do {
//         let y = 2 * counter + 3;
//         console.log(`when x = ${counter} y = ${y}`);
//         counter++; 
// }while(counter <= 20)

function agent(even){
        even();
}

agent(
        () => {
                        console.log('generate');
                
        }
)