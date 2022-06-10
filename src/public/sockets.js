// eslint-disable-next-line no-undef
const socket = io(); 

export const loadProducts = (divProductos) =>{
    socket.on('client:newMessage', (productos) => {
        productos.map(producto =>{
            return(
                divProductos.innerHTML+= 
               `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                    </div>
                    <ul>
                        <li>${producto.url}</li>
                        <li>${producto.precio}</li>
                    </ul>
               </div>`
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
        `<div class="card">
             <div class="card-body">
                 <h5 class="card-title">${nuevoProducto[0].nombre}</h5>
             </div>
             <ul>
                <li>${nuevoProducto[0].url}</li>
                <li>${nuevoProducto[0].precio}</li>
             </ul>
        </div>`;
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