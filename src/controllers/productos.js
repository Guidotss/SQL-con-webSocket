import knex from 'knex'; 

export class Producto{
    constructor(options,table){
        this.knex = knex(options); 
        this.table = table; 
    }

    async getAll(){
        const productos = await this.knex.from(this.table).select('*'); 
        return productos; 
    }

    async create(obj){
        if(JSON.stringify(obj) != '{}'){
            const nuevoProducto = await this.knex.from(this.table).insert(obj); 
            return await this.knex.from(this.table).select('*').where('id',nuevoProducto);
        }
    }
}