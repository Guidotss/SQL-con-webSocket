//import {Producto} from './controllers/productos'; 
import {options} from './dataBase/config/configDB'; 
import {Mensajes} from './controllers/mensajes'; 
import {Producto} from './controllers/productos'; 

const apiProductos = new Producto(options.mariaDB,'productos'); 
const apiMensajes = new Mensajes(options.sqlite3,'mensajes');

export default (io)=>{
    io.on('connection',(client) =>{
        console.log('new user connected',client.id);

        const emitProductos = async() => {
            const  productos = await apiProductos.getAll(); 
            io.emit('server:loadProducts',productos); 
        }; 
        emitProductos();

        const emitMensaje = async()=>{
            const mensajes = await apiMensajes.getAll(); 
            io.emit('server:loadMenssages',mensajes);
        };
        emitMensaje();


        client.on('client:newMessage',async(mensaje)=>{
            const nuevoMensaje = await apiMensajes.create(mensaje);
            io.emit('server:newMessage',nuevoMensaje); 
        });

    }); 
};