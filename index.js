require("dotenv").config()
const http= require("http")

 function requestcontroller(req, res){
   const url= req.url
   const method = req.method
   
    console.log({url, method})

    if (method === "GET" && url === "/"){
      res.setheader("content-type", "text/html; charset=utf-8")
      res.write("<h1>Hola Mundo Desde la Pagina Principal<h1>")
      res.end()
      return 
   }
 }
 //config nuestro servidor 
    const server= http.createServer(requestcontroller)

    const port= process.env.port
    server.listen(port, function (){ console.log("Aplicacion corriendo en el pruerto: " + port ) })
