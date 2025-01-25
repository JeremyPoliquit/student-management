import { query } from './db'

// Create
export const createStudent = async (firstname, lastname, age, gender, contact_number) => {
    const sql = 'INSERT INTO student (firstname, lastname, age, gender, contact_number) VALUES (?, ?, ?, ?, ?)';
    try {
        const result = await query (sql, [firstname, lastname, age, gender, contact_number]);
        return result.insertId;
    } catch (error) {
        throw new Error('failed to create');
    }
}

export const getStudent = async () => {
    const sql = "SELECT * FROM student";
    try {
        const result = await query(sql);
        return result;
    } catch (error) {
        throw new Error('Failed to fetch students')
    }
}