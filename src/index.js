import express from 'express'; 
import http from 'http';
import sockets from './sockets' ; 
import morgan from 'morgan'; 
import './dataBase/productos'; 
import './dataBase/tablaMensajes';
import {Server as ioServer} from 'socket.io'; 
import 'dotenv/config'; 


const app = express(); 
const httpServer = http.createServer(app); 


app.use(morgan('dev')); 
// eslint-disable-next-line no-undef
app.use(express.static(__dirname + '/public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3030; 

httpServer.listen(PORT,() =>{
    console.log(`Server on port ${httpServer.address().port}`);
}); 



const io = new ioServer(httpServer); 
sockets(io); 
