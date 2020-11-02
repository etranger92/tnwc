/**************************SQL**************************/
// eslint-disable-next-line @typescript-eslint/no-var-requires
import mysql from 'mysql2';

const config = {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'foodh',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
};

export { mysql, config };
