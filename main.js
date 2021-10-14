// console.log("Server open")

// var http = require('http');
// var fs = require('fs');
// var url = require('url');

// const { dirname } = require('path');
// const { type } = require('os');
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

// while(true){
//   console.log('c')
//   console.log('d')
// }
// console.log('e')








