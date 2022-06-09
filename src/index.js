import express from 'express'; 
import morgan from 'morgan'; 
import 'dotenv/config'; 
const app = express(); 


app.use(morgan('dev')); 
app.use(express.static(__dirname + './public')); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

const PORT = process.env.PORT || 3001; 

const server = app.listen(PORT, () => {
    console.log(`Server on port ${server.address().port}`);
}); 