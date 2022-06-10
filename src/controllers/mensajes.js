import knex from 'knex';

export class Mensajes{
    constructor(options,table){
        this.knex = knex(options); 
        this.table = table; 
    }

    async getAll(){
        const mensajes = await this.knex.from(this.table).select('*');
        return mensajes; 
    }
    
    async create(mensaje){
        const nuevoMensaje = await this.knex.from(this.table).insert(mensaje);
        return await this.knex.from(this.table).select('*').where('id',nuevoMensaje);
    }
}