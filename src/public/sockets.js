// eslint-disable-next-line no-undef
const socket = io(); 

export const loadProducts = (divProductos) =>{
    socket.on('client:newMessage', (productos) => {
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
    socket.on('server:loadMenssages',(mensajes)=>{
        mensajes.map(mensaje=>{
            return(
                divMensajes.innerHTML+=
                `<strong>${mensaje.mail}</strong>
                <em>${mensaje.mensajes}</em>
                <br>`
            );
        });
    });
};

export const newMessage = (divMensajes) =>{
    socket.on('server:newMessage',nuevoMensaje=>{
        divMensajes.innerHTML+=
        `<strong>${nuevoMensaje[0].mail}</strong>
        <em>${nuevoMensaje[0].mensajes}</em>
        <br>`;
    });
};