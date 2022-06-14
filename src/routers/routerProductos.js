import {Router} from 'express';
import {Producto} from '../controllers/productos'; 
import {options} from '../dataBase/config/configDB'; 
import path from 'path'; 
const router = Router(); 

const apiProductos = new Producto(options.mariaDB,'productos'); 

router.get('/productos',(req,res)=>{
    res.sendFile(path.resolve('src/public/' ,'agregarProductos.html'));
}); 

router.post('/productos',async (req,res) =>{
    const producto = req.body;  
    await apiProductos.create(producto); 
    res.redirect('/'); 
}); 


export default router;