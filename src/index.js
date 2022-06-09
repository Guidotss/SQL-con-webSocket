import express from 'express'; 
import morgan from 'morgan'; 
import http from 'http'; 
import './dataBase/productos'; 
import {Server as ioServer} from 'socket.io'; 
import 'dotenv/config'; 


const app = express(); 
const httpServer = http.createServer(app); 
const io = new ioServer(httpServer); 


app.use(morgan('dev')); 
app.use(express.static(__dirname + '/public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

const PORT = process.env.PORT || 3030; 

httpServer.listen(PORT,() =>{
    console.log(`Server on port ${httpServer.address().port}`);
}); 
