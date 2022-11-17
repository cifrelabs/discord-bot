import { createPool } from 'mysql2/promise';
import 'dotenv/config';

export const pool = createPool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PW,
    database: process.env.DB,
    port: process.env.PORT,
    multipleStatements: true,
    enableKeepAlive: true,
	timezone: 'Z',
});

// Keep Alive
setInterval(async () => {
	await pool.query(`SELECT 1`).catch(err => { console.error(err) });
}, 1000);

