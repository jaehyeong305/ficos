import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: '127.0.0.1', 
    user: 'root',     
    password: 'password',
    database: 'ficos',
});

export const selectBySQL = async <T>(sql: string): Promise<{ data: T[]; error: string | null }> => {
    try {
        const [rows] = await pool.query(sql);
        return { data: rows as T[], error: null };
    } catch (error: any) {
        const errorMessage = error.message || 'An error occurred';
        return { data: [], error: errorMessage };
    }
}

// TODO(hajae): 조건문
export const select = async <T>(select: string[], from: string): Promise<{ data: T[]; error: string | null }> => {
    try {
        const [rows] = await pool.query(`SELECT ${select.join(', ')} FROM ${from}`);
        return { data: rows as T[], error: null };
    } catch (error: any) {
        return { data: [], error: error.message };
    }
}

