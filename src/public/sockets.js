// eslint-disable-next-line no-undef
const socket = io(); 

export const loadProducts = (divProductos) =>{
    socket.on('server:loadProducts', (productos) => {
        console.log(productos);
        productos.forEach(producto =>{
            
            divProductos.innerHTML+= 
            `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                </div>
                <ul>
                    <li>${producto.url}</li>
                    <li>${producto.precio}</li>
                </ul>
            </div>`; 
            
        });
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