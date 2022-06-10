import {loadProducts,saveProduct,newProduct,saveMenssage,loadMessages,newMessage} from './sockets.js'; 

const form = document.getElementById('productForm'); 
const nombreProducto = document.getElementById('nombre'); 
const urlProducto = document.getElementById('url'); 
const precioProducto = document.getElementById('precio'); 
const divProductos = document.getElementById('productos');
const mail = document.getElementById('mail');
const enviar = document.getElementById('enviar');
const mensaje = document.getElementById('mensaje');
const divMensajes = document.getElementById('mensajes');

loadProducts(divProductos);
newProduct(divProductos);


form.addEventListener('submit', (e) =>{
    e.preventDefault(); 

    const producto = {
        nombre: nombreProducto.value,
        url:urlProducto.value,
        precio:precioProducto.value
    }; 
    saveProduct(producto); 
}); 

loadMessages(divMensajes);
newMessage(divMensajes); 

enviar.addEventListener('click',() =>{
    const mensajes ={
        mail:mail.value,
        mensajes:mensaje.value
    };
    saveMenssage(mensajes);
});

