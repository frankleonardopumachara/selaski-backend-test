// setup DB connection
import mysql from 'mysql2'

export const dbConnection = mysql.createPool({
    connectionLimit: 4,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

dbConnection.getConnection((err, connection) => {
    if (err) throw err
    console.log('Database connection success')
    connection.release()
})
