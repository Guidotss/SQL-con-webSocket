export const options = {
    mariaDB:{
        client:'mysql',
        connection:{
            host:'127.0.0.1',
            user:'root',
            password:'Guidomartin1',
            database:'ecommerce'
        }
    },
    pool:{min:0,max:10},

    sqlite3:{
        client:'sqlite3',
        connection:{
            filename:'./mensajes.sqlite'
        }
    },
    useNullAsDefault:true
};