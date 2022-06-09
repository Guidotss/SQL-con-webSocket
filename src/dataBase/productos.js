import knex from 'knex';
import{options} from './config/configDB'; 

export async function crearTablaProductos(){
    await knex(options.mariaDB).schema.createTableIfNotExists('productos',table =>{
        table.increments('id').unique; 
        table.string('nombre').notNullable; 
        table.string('url').notNullable; 
        table.float('precio').notNullable; 
    }); 

    console.log('tabla creada');
}

crearTablaProductos(); 