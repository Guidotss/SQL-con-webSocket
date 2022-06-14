import {loadProducts,saveMenssage,loadMessages,newMessage} from './sockets.js'; 

const divProductos = document.getElementById('productos');
const mail = document.getElementById('mail');
const enviar = document.getElementById('enviar');
const mensaje = document.getElementById('mensaje');
const divMensajes = document.getElementById('mensajes');

loadProducts(divProductos);

loadMessages(divMensajes);
newMessage(divMensajes); 

enviar.addEventListener('click',() =>{
    const mensajes ={
        mail:mail.value,
        mensajes:mensaje.value
    };
    saveMenssage(mensajes);
});

