require("dotenv").config()
const http= require("http")

 function requestcontroller(){
    //logica muestra funcion 
    console.log("HOLA MUNDO!!!")
 }
 //config nuestro servidor 
    const server= http.createServer(requestcontroller)

    const port= process.env.port
    server.listen(port, function (){ console.log("Aplicacion corriendo en el pruerto: " + port ) })
