const http = require('http');
const Coffee = require('../models/coffee');

const hostname = 'localhost'
const port = 3000; 

const server = http.createServer(async(req, res)=>{
    console.log(req.url)
    res.statusCode = 200 
    res.setHeader('Content-Type', 'application/json');
    if(req.url === '/acoffee'){
        const oneCoffee = await Coffee.getByID(3); 
        const OneCoffeeJSON = JSON.stringify(oneCoffee)
        res.end(OneCoffeeJSON);
    } else{
        res.end(`{
            message: 'thanks bro'
        }`)
    }
});

server.listen(port, hostname, () =>{
    console.log(`Server is running on ${port}${hostname}`);
})