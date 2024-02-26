 const http= require("http")

 function requestcontroller(){
console.log("HOLA MUNDO!!")



 }
 const server= http.createServer(requestcontroller)

 server.listen(4000)
