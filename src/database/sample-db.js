import { pool } from "./config-db.js";

// Create your DB Functions here:
export const query = async (sql) => {
    return await pool.query(sql).catch(err => console.error(err));
}