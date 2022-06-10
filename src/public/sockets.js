// eslint-disable-next-line no-undef
const socket = io(); 

export const loadProducts = (divProductos) =>{
    socket.on('server:loadProducts', (productos) => {
        productos.forEach(producto =>{
            return(
                divProductos.innerHTML+= 
                `<ul>
                    <li>${producto.nombre}</li>
                </ul>`
            );
        });
    });
};

export const saveProduct = (producto) => {
    socket.emit('client:newProduct',producto); 
};

export const newProduct = (divProductos) =>{
    socket.on('server:newProduct',nuevoProducto =>{
        divProductos.innerHTML+= 
        `<li>${nuevoProducto[0].nombre}</li>`;
    }); 
};

export const saveMenssage = (mensaje)=>{
    socket.emit('client:newMessage',mensaje);
};

export const loadMessages = (divMensajes)=>{
    socket.on('server:loadMessages',(mensajes)=>{
        mensajes.map(mensaje =>{
            return(
                divMensajes.innerHTML += 
                `<div>
                    <strong>${mensaje[0].mail}</strong>
                    <em>${mensaje[0].mensajes}</em>
                </div>`
            );
        }).join('');
    });
};