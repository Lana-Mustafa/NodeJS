//write a variable without initial value
var var1 ;
/* var z = undefined; */

//write a variable with initial value
var var2=11;

//write 3 variables in same line without initial value
var x ,y, z ;

//write 3 variables in same line with initial value
//1st way
var x =10 ,y =11, z=16 ;
/* console.log(x); */
//2nd day
/* var [a,b,c,d] = [0,1,2,3];
console.log(a, b, c, d); */

//write 3 variables with Boolean value
var a= true , b=false , c= true ;
/* console.log(a, b, c); */

//write a constant
const greeting ="Welcome!";
/* console.log(greeting);
 */

 //write an empty array without initializing its size
 /* var arr =[]; */
 var arr = new Array();
 /* console.log(arr); */

 //write an array of number from 1 to 10

var numArr = [1,2,3,4,5,6,7,8,9,10];
/* console.log(numArr); */

//write an array of strings has letters from A to J
var alphaArr =['A','B','C','D','E','F','J'];
/* console.log(alphaArr); */

//Write an Object has at least 3 attributes (keys) and give each one a numeric value
var numObj ={ a:1 , b:2 , c:3 };
/* console.log(numObj); */

//write an object has at least 3 attributes (keys) and give each one a string value
var strObj ={ a:'Dania', b:'Ahmad' , c:'Hamzeh' };
/* console.log(strObj);
 */
//write an object has at least 3 attributes (keys) and give each one a Boolean value
var boolObj ={ a:true , b:false , c:true };
/* console.log(boolObj); */

//write an object has at least 3 attributes (keys) and give each one an array value
var arrObj ={ 
             a:['A','B','C','D','E','F','J'],
             b:[1,2,3,4,5,6,7,8,9,10] , 
             c:[1,2,3,4] };
/* console.log(arrObj); */

//write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
var objObj={
          x:{ a:1 , b:2 , c:3 },
          y:{ a:1 , b:2 , c:3 },
          z:{ a:'Dania', b:'Ahmad' , c:'Hamzeh' }
                            };
/* console.log(objObj.x); */

//Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object
var multiObj={
    x:"Welcome !!",
    y:11,
    z:true,
    w:['A','B','C','D','E','F','J'],
    v:{ a:'Dania', b:'Ahmad' , c:'Hamzeh' }
                      };
/* console.log(multiObj); */

//Write an array of objects
var objsArr = [
    { a:'Dania', b:'Ahmad' , c:'Hamzeh' },
    { a:'Tala', b:'Ayah' , c:'Koko' },
    { a:'Feras', b:'Yacoub' , c:'Adam' }
];
/* console.log(objsArr); */

//write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object

var treeArr=[
             { x:{ a:[1 ,2,3,{e:'dania',f:'tala',g:'ayah'}],
                    b:[11,16,19 ,{h:'ahmad',i:'hamzeh',j:'feras'}] },

              y:{ a:[1 ,2,3,{l:'adam',m:'lojain',m:'yacoub'}],
                    b:[11,16,19 ,{q:'maria',s:'koko',t:'lara'}] }, 
             },
             {
                h:{  a:[1 ,2,3,{o:'batool',p:'shatnawi',r:'ashram'}],
                     b:[11,16,19 ,{v:'laith',w:'roaa',u:'saadi'}]     } ,

                k:{  a:[1 ,2,3,{l:'omar',m:'amal',m:'sara'}],
                     b:[11,16,19 ,{q:'marina',s:'khadeejah',t:'osama'}] }
            }
                                              
]
/* console.log(treeArr[0].x.a); */

//Write a function to sum two numbers passed in parameters

//ES6
sum=(num1 ,num2)=>num1 +num2 ;
/* console.log(sum(5,4));
 */
//JS5
function sum (num1 ,num2){
     return num1 + num2 ;
}
/* console.log(sum(7,4));
 */

//write a function to multiply two numbers
multiply =(num1 ,num2)=>{
    return num1 * num2
}
function multiply (num1 ,num2){
    return num1 * num2 ;
}
/* console.log(multiply(7,4)); */

//write a function to sum two numbers entered by user

/* var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n');
console.log('Addition of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var sum = (a+b);
  
       console.log('\n');
       console.log('The sum of ',a, ' and ',b, ' is ' , sum,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
});
 */
//write a function to multiply two numbers entered by user

/* var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n');
console.log('Multiply of Two Numbers in NodeJS');
console.log('\n');
rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
  var a = parseInt(x);
  var b = parseInt(y);
        var multiply = (a*b);
  
       console.log('\n');
       console.log('The multiply of ',a, ' and ',b, ' is ' , multiply,'.');
    console.log('\n');
       console.log('End of Program');
        rl.close();
    });
}); */

//Write a function to return a value
function myData() { 
    return 123; 
 } 
 /* console.log(myData()); */ // 123 

 //Write a function to print a value
 function hello(name) {
    console.log("hello " + name);
}
hello("All !! ");