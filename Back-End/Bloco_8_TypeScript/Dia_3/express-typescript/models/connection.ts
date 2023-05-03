import mysql from 'mysql2/promise'

export default mysql.createPool({
  host: process.env.DB_HOSTNAME || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'books_api',
});