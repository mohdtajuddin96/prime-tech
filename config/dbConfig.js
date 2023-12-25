const { Pool } = require('pg')

const DataBase = 'ems_pg_db'
const UserName = 'ems_pg_db_user'
const Password = 'GOucjjRTqNJrIGtp2SEIR0viSx5DafyM'
const Host = 'dpg-clrvo3bip8as73a195o0-a'


const conn = `postgres://${UserName}:${Password}@${Host}:${Port}/${DataBase}`

const db = new Pool({
    connectionString: conn,
    ssl: { rejectUnauthorized: false }
})

module.exports = db