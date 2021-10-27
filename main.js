// console.log("Server open")

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// const { dirname, resolve } = require('path');
// const { type } = require('os');
// const { rejects } = require('assert');
// var app = http.createServer(function(request,response){
//     var _url = request.url;
//     console.log(_url);
//     if(_url == '/'){
//       _url = '/index.html';
//     }
//     if(_url == '/favicon.ico'){
//       response.writeHead(404);
//       response.end();
//       return;
//     }
//     response.writeHead(200);
//     response.end(fs.readFileSync(__dirname + _url));
 
// });
// app.listen(3000);



//// Number test
// console.log(9)
// console.log(2*5)
// console.log(10/2)


// // String test
// console.log('1'+'5');
// console.log('1+5')



// // string count    length
// var str = 'hello world'
// str.length
// console.log(str.length)
// console.log('hello world'.length)



// // variable 변수 
// var a = 1;
// console.log(a);
// var a = 2;
// console.log(a);



// // template 템플릿
// var HTML = '00';
// var letter = 'HTML elements '+ HTML +' are the building blocks of HTML pages. \n\ With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. \n\ It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. \n\ HTML elements are delineated by tags, written using angle brackets.' 

// console.log(letter)
// console.log(letter.length)

// var letter = `HTML elements ${HTML} are the building blocks of HTML pages. \n\ With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. \n\ It provides a 
// means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists,
//  links, quotes and other items. \n\ HTML elements are delineated by
//   tags, written using angle brackets.` 



// url 이해
// http://opentutorials.org:3000/main?id=HTML&page=12
// http 는 protocol 통신규칙, opentutorials.org 는 host(domain), 3000 은 port, 포트번호,
// main 은 path, id=HTML&page=12 는 query string 시작은 ? 로 시작하기 



// // boolean datatype 불리언
// // 숫자,number 1 2 3 4 5
// // 문자,string 'a' 'b' 'c'

// console.log(true);
// console.log(false);



// // 비교연산자
// console.log(1==1);  //true
// console.log(1==2);  //false
// console.log(1>2);   //false
// console.log(1<2);   //true
// console.log(1===1); //true
// console.log(1===2); //false  ===  는 타입까지 같아야 한다.



// // 제어문 Flow control statements
// console.log('a');
// console.log('b');
// console.log('c1');
// console.log('c2');



// // 조건문 Conditional statement  if문 if(true or false){}
// console.log('a');
// console.log('b');
// if(true){
//   console.log('c1');
// } else {
//   console.log('c2');
// }
// console.log('d');  // true 면 c1 실행 



// // 콘솔 입력값 받기
// var args = process.argv;
// console.log(args[1])
// console.log('a');
// console.log('b');
// if(args[1]=='1'){
//   console.log('c1');
// } else {
//   console.log('c2');
// }
// console.log('d');



// // 반복문 Loop statement  for, while, do while  while(ture or false){}
// console.log('a')
// console.log('b')

// var i = 0;
// while(i<2){
//   console.log('c');
//   console.log('d');
//   i= i+1;
// }
// console.log('e')



// 배열과 반복문 Array data type, Loop statement
// var arr = ['A','B','C','D'];    //배열
// console.log(arr[0]);            //배열의 자릿값
// console.log(arr[1]);
// // arr[2]=3;
// arr.push('E');
// console.log(arr.length)
// console.log(arr);



// // 배열과 반복문2 Array data type, Loop statement
// var number = [1,2,3,4,5,6];
// var i = 0;
// while(i<number.length){
//     console.log(number[i]);
//     i= i+1;
// }



// //동기,비동기
// function workP(sec) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(new Date().toISOString());
//     }, sec * 1000);
//   });
// }


// function justFunc() {
//   return "just Function";
// }


// const asyncFunc= async () => {
//   return "async Function"
// }


// console.log("justFunc : ",justFunc());
// console.log("asyncFunc : ",asyncFunc());
// console.log("workP : ",workP());


// console.log("1:",typeof null)

// console.log("2:",typeof undefined)

// console.log("3:",null == undefined)

// console.log("4:",null === undefined)

// console.log("5:",null == null)

// console.log("6",null === null)

// console.log("7:",!null)



// // 화살표 함수
// const foo = (b) => {
//   var a = 10;
//   return a + b +11;
// }

// const bar = (x) =>{
//   var y = 1;
//   return foo(x*y);
// }

// console.log(bar(7));


// const singletest = ()=>{
//   var i;
//   console.log(1)
//   for(i = 0; i<3; i++){
//     console.log("자바스크립트는 싱글 스레드 언어");
//   }
//   console.log(3);
// }

// singletest();



// crypto 모듈, password 암호화



// var obj = {
//   a :  1,
//   b : () =>{
//   console.log(5)
//   }  
// }
// obj.b()



// const test = () => {
//   setTimeout(()=>{
//     callback();
//   }, 1000);
// }

// const callback = () => {
//   console.log("hello")
//   return 1;
// }

// test(callback());




// console.log(2750000)


// let 은 재할당이 된다. 재정의가 안된다.
// const 는 재할당, 재정의 둘다 안됨
// var 은 다 된다.



// arr1 = arr1.filter(x => !arr2.includes(x));

// console.log(arr1)


// //if else
// const e = "박준석"
// if(e=="박준석") console.log("늦음")
// else console.log("빠름")


// // 3항 연산자
// const d = "강기모"
// d ==  "강기모"
// ? console.log("맞음")
// : console.log("틀림")
// // 조건문 ? true일때 적고   : 은 false일떄




// // AND(&&), OR(||), NOT(!)
// const a = "a"
// const b = "b"
// const c = "a"

// if(a!=b || a==a) console.log("맞음")
// else console.log("틀림")


// if(a!=b && a==a) console.log("맞음")
// else console.log("틀림")



// a = !true

// console.log(a)

// function addOne(b){
//   var a = b +1;
//   return a;
// }

// console.log(addOne(4))

// const add = (x,y)=>{
//   const result = x + y;
//   console.log(result)
//   return result;
// }

// add(3,4)




// 콘솔창에서 입력받기
// const readline= require('readline');
// const rl = readline.createInterface({
//   input : process.stdin,
//   output : process.stdout
// });

// const input = [];

// rl.on("line", (line)=>{
//   input = line.split('').map((el)=> parseInt(el));
// }).on("close", ()=>{
//   console.log(input[0] + input[1]);
//   process.exit();
// });





// 콘솔창에서 입력받기2
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ').map((el) => parseInt(el));
//   })
//   .on('close', function () {
//     console.log(input[a] + input[b]);
//     process.exit();
//   });


// const a = 100;
// const b = "Hello, World!";

// console.log("a is %d",a);
// console.log(`${a} 는 숫자 ${b}는 문자`)






// javascript 기본 문법
// var notify = function (message) {
//     console.log('# NOTIFICAION : ' + message);
// }

// notify('say something');


// var notify = (message)=>{
//     console.log('# NOTIFICAION : ' + message);
// }

// notify('say something')


// var add = (value1,value2) => value1 + value2

// console.log(add(5,6));







// const a = "str1 + " + "str2"

// console.log(a)

// a==b
// a!=b
// a==b && a==c
// a==b || a==c
// a>b

// const a = 2
// const b = 1
// if(a>b || a==b){
//     return true;
// }



const fun1 = (a,b)=> {
    return a*b;
}

const fun2 = (a,b) => {
    return a+b;
}

exports.fun1 =  fun1;

fun1(3,2)

if()