import knex from 'knex';
import {options} from './config/configDB';

export async function crearTableMensajes(){
    await knex(options.sqlite3).schema.createTableIfNotExists('mensajes',table=>{
        table.increments('id').unique(); 
        table.string('mail').notNullable(); 
        table.string('mensajes').notNullable(); 
    });

    console.log('sqlite3 creada');
}

crearTableMensajes();