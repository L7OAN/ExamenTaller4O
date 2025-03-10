import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "Joan",
    password: "12345",
    database: "productos",
});

export default connection;