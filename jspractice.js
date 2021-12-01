var http = require('http');
// var fs = require('fs');
// var url = require('url');
// const { count } = require('console');
// const { link } = require('fs/promises');
// const { StringDecoder } = require('string_decoder');
// const { text } = require('express');
var app = http.createServer(function(request,response){
    // var _url = request.url;
    // console.log(_url);
});
app.listen(3000);

// require('events').EventEmitter.prototype._maxListeners = 100;



// const express = require('express');
// const app = express()
// const port = 8080;

// app.listen(port,(req,res)=>{
// });




// const name = "MIKE";
// const age = 30;
// const name1 = "mike";

// 인피니티 스톤 만들기
// const x = 10/0
// console.log(x+" "+"Stone")


// // not a number  nan 값
// const name = "mike";
// const y = name/2;

// console.log(y)




// // 비교연산자 boolean
// const a = true;
// const b = false;

// const name ="mike";
// const age = 30;

// console.log(name == "mike");
// console.log(age>40);




// null, undefinded
// const user = null;
// console.log(user)


// const name = "Groot";
// const message = `I am ${name}`

// console.log(message);



// 콘솔창 `` 사용해서 변수명 넣기
// const name = "mike";
// const a = "나는";
// const b = "입니다";
// console.log(`"${a +" "+ name + " " + b}"`);




// // prompt, alert, confirm
// // prompt 입력은 무조건 string
// const name = prompt("이름 입력");
// alert("환영합니다,"+name+"님");




// // 형변환
// const mathScore = 80;
// const engScore = 75;
// const korScore = 93;
// const result = () => {
    
//     return (mathScore + engScore + korScore) / 3   

// }

// console.log(result());



// // string(), number(), boolean()
// // String();
// console.log(
//     String(3),   // string 3
//     String(true),   // string true
//     String(false),  // string false
//     String(null),   // string null
//     String(undefined),  // string undefined
// );


// // number();
// console.log(
//     Number(3),  // 3
//     Number(true),   // 1
//     Number(false),  // 0
//     Number(null),   // 0
//     Number(undefined),  // nan
// );

// // boolean();
// console.log("true인 경우");
// console.log(
//     Boolean(1),   // // true
//     Boolean(123), // // ture
//     Boolean("javascript"),   // // true
// );
// console.log();

// console.log("false 나오는 경우")
// console.log(
//     Boolean(0),  // // false
//     Boolean(""), // // false
//     Boolean(null), // // false
//     Boolean(undefined),  // // false
//     Boolean(NaN) // // false
// );

// // 정리 
// // string() = 문자형으로 변환;
// // Number() = 숫자형으로 변환;
// // Boolean() = 불린형으로 변환;





// // 연산자
// let num = 10;
// let result = ++num

// console.log(result);


// console.log(10>5);
// console.log(10==5);
// console.log(10!=5);

// const a = 1;
// const b = "1";
// console.log(a == b);




// // 조건문, if
// const age = 19;

// const agecal = ()=>{
//     if(age>19){
//         return console.log("성인입니다.")        // 19살보다 많다면 실행
//     }
//     else if(age === 19){                        // 19살과 같다면
//         console.log("수능 잘보세요.")
//     }
//     else{
//         console.log("미성년자입니다.")          // 그것도 아니라면 
//     }
// }

// agecal();
// console.log('------------------------------------------');




// 논리 연산
// 이름이 mike이거나 나이가 20살보다 많거나
// || or
// const name = "mike";
// const age = "20";

// const agecal = ()=>{
//     if(name === "kimo" || age >= "20"){
//         console.log("합격 : 성인입니다")
//     } else {
//         console.log( "불합격 : 미성년자입니다")
//     }
// };
// agecal();





// // not !
// const name = "mike";
// const age = "20";

// const agecal = ()=>{
//     if(name != "mike" || age != "20"){
//         console.log("합격 : 성인입니다")
//     } else {
//         console.log( "불합격 : 미성년자입니다")
//     }
// };
// agecal();



// 함수화하기
// const age = 20;
// const isAge = 20===age;
// const func1 = ()=>{
//     if(isAge===age){
//         console.log(`${age}살입니다.`)
//     } else{
//         console.log(`${age}이 아닙니다.`)
//     }
// }
// func();



// // 그냥 if문만 걸기
// const age = 20;
// const isAge = 10===age;
// if(!isAge){
//     console.log("틀림")
// }else{
//     console.log("맞음")
// };





// // 비교연산자 우선순위
// const gender = "female";
// const name = "kimo";
// const isAdult = true;

// const func3 = () => {
//     if(gender === "female" && name === "kimo" && isAdult){
//         console.log("통과")
//     } else{
//         console.log("돌아가")
//     }
// }
// func3();




// // 갑자기 잡동사니;
// var x = 6;
// var y = 12;

// function addFunc(a,b){
//     console.log(a+b);
// };
// addFunc(x,y);


// function sayHello(name = "kimo"){
//     console.log(`Hello, ${name}`)
// };

// sayHello("ki");
// sayHello();


// function sum1(a,b){
//     return a+b
// };
// console.log(sum1(true,false,true,true));


// function ret1(a,b){
//     if(a<0 && b<5){
//         return true && false
//     };
//     console.log(true || false)
// };
// ret1(-1,6)


// function addFunc(a,b){
//     if(a<0 || b<0){
//         return console.log( "a b 0보다 큰 수 입력")
//     } else{
//         return a+b;
//     }
// }
// console.log(addFunc(1,5));






// // 반복문 loop 
// // for문  반복횟수가 명확하면 O =  for문 , 반복 횟수가 명확하지 않으면 X = while문

// for(let i=0; i<=20; i++){
//     console.log(i);
// };


// // 짝수 출력
// for(let i = 0; i<=20; i++){
//     if(i%2){
//         continue;
//     }
//     console.log(i)
// };




// // break;
// while(true){
    //     let answer = confirm("계속 할까?")
    //     if(!answer){
        //         break;
        //     }
        // };
        
        
        
// // while문   반복 횟수를 모르면 while문
// // 숫자 세다가 멈추기; 숫자카운트;
// const countfunc = ()=>{
//     let i = 0;
//     while(i<=20){
//         console.log(i);
//         if(i++ == 15){
//             console.log("Do you want continue?")
//             return countfunc2();
//         }
//     };
// };

// const countfunc2 = () =>{
//     // for문 방법
//     for(j = 15; j<=20; j++){
//         console.log(j);
//     };
//     console.log("Please stop");

//     // //while문 방법
//     // let j = 16;
//     // while(j<=20){
//     //     console.log(j);
//     //     if(j++ == 20){
//     //         console.log("Please stop");
//     //         // return countfunc2;
//     //     }
//     // };
// };
// countfunc();



// // 가장 기본적인 1~10까지 출력
// for(var i = 0; i<=10; i++){
//     console.log(i)
// };




// //function; 함수
// function sayHello(name){
//     if((name) === Number){
//         console.log(`Hello, ${name}`);
//     } else {
//         console.log("Please into string")
//     }
// }
// sayHello()

/////////
// const showError = ()=>{
//     console.log("Error 발생");
// };
// showError();


/////////

// const sayHello = (name)=>{
//     const msg = `"Hello, ${name}"`;
//     if(name === undefined){
//         console.log(`Please into your name`);
//     }else if(name === Number){
//         console.log(`Please into text`);
//     }
//     else {
//         console.log(msg);
//     };
// };
// sayHello(5);



// 이거 왜안되냐;
// let sayHello = (name)=>{
//     name = String || Number 
//     // const msg = `"Hello, ${name}"`;
//     if(name == String){
//         console.log(`Hello, ${name}`)
//     } else {
//         console.log(`Please into your name`)
//     }
// };
// sayHello("kimo");



// let msg = "hello";
// console.log("함수 호출 전");
// console.log(msg);

// const sayHello = (name)=>{
//     if(name){
//         msg += `${name}`;
//     }
//     console.log("함수 내부");
//     console.log(msg);
// };

// sayHello("kimo");

// console.log("함수 호출 후");
// console.log(msg);
// console.log("kimo");





// const hello = (name)=>{
//     return console.log(name)
// };
// hello("kimo")



// const hi = async (name)=>{
//     return  name
// };
// hi("kimo")




// function hello(){
//     return "hello"
// };
// console.log(hello());


// async function hello(){
//     return "hello"
// };
// console.log(hello());



// const hello = async ()=>{
//     return "hello"
// };

// console.log(hello());


// const test = ()=>{
//         for(var i = 0; i<=10; i--){
//             console.log(i)
//         }
// };
// test();





// // promise 이해하기
// const b = ()=>{
//     console.log("b call")
// };



// const a = (another)=>{
//     console.log("start")
//     another();
//     console.log("end")
// };

// a(b);
// b();





// const sayHello = (name='kan')=>{
//     // let newName = name || 'friend';
//     let msg = `hello, ${name}`
//     console.log(msg)
// }

// sayHello();
// sayHello('jane');




// function add(num1, num2) {  
//     return num1 + num2
// };

// console.log(add(3,5));
// // 함수 한번에 한작업에 집중, 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍;





// let showError = ()=>{
//     console.log("error");
// }
// showError();




// 객체 object

const superman = {
    name : "kimo",
    age : "26",
}

// if (superman.name = "kIMO"){
// console.log("REAL!")
// } else {
//     console.log("He doesn't true")
// }


superman.home = "seoul";
superman['hobby'] = "soccer";
// console.log(superman)

if(superman.name === "kimo"){
    console.log(superman,superman.real="true")
} else if(superman.name != "kimo"){
    console.log(superman,"Fake")
} else {
    console.log("System shut down")
}


// delete superman.name;


