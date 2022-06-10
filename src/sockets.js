import {Producto} from './controllers/productos'; 
import {options} from './dataBase/config/configDB'; 
import {Mensajes} from './controllers/mensajes'; 

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


        client.on('client:newProduct',async (producto)=>{
            const nuevoProducto = await apiProductos.create(producto); 
            client.emit('server:newProduct',nuevoProducto); 
        }); 

        const emitMensaje = async()=>{
            const mensajes = await apiMensajes.getAll(); 
            io.emit('server:loadMenssages',mensajes);
            console.log(mensajes);
        };
        emitMensaje();


        client.on('client:newMessage',async(mensaje)=>{
            const nuevoMensaje = await apiMensajes.create(mensaje);
            console.log(nuevoMensaje);
        });

    }); 
}; 