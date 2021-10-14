var express = require('express');
var app = express();
var port = 8080

app.listen(port, function(){
    console.log(`Listening on ${port}`)
});


// // HTML 파일보내기
// // page1 url로 접속하면 "페이지1" 가 뜬다 
// app.get('/page1', function(req, res){
//     res.send("페이지 1");
// });

// // page2 url로 접속하면 "페이지2" 가 뜬다
// app.get('/page2', function(req, res){
//     res.send("페이지 2");
// });

// app.get('/1.html', function(req, res){
//     res.sendFile(__dirname + "/1.html");
//     console.log("HTML 접속")
// });

// app.get('/2.html', function(req,res){
//     res.sendFile(__dirname + "/2.html");
//     console.log("CSS 접속");
// });

// app.get('/3.html', function(req,res){
//     res.sendFile(__dirname + "/3.html");
//     console.log("JavaScript 접속");
// });



// app.get('/:type', async (req,res) => {
//     // req.send("hello, world")
//     var {type} = req.params;

//     if(type === 'seoul'){
//         var data = [{
//             name : "kimo",
//             city : "seoul"
//         },
//         {
//             name : "jong",
//             city : "seoul"
//         }];
//         res.send(data);
//         console.log(data)
//     }else if(type === 'jeju'){
//        var data = [{
//            name : "hong",
//            city : "jeju"
//        }];
//        res.send(data)
//        console.log(data)
//     }
// });















