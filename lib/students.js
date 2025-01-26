import { query } from './db'

// CREATE
export const createStudent = async (firstname, lastname, age, gender, contact_number) => {
    const sql = 'INSERT INTO student (firstname, lastname, age, gender, contact_number) VALUES (?, ?, ?, ?, ?)';
    try {
        const result = await query (sql, [firstname, lastname, age, gender, contact_number]);
        return result.insertId;
    } catch (error) {
        throw new Error('failed to create');
    }
}

// GET
export const getStudent = async () => {
    const sql = "SELECT * FROM student";
    try {
        const result = await query(sql);
        return result;
    } catch (error) {
        throw new Error('Failed to fetch students')
    }
}

// UPDATE
export const updateStudent = async (id, firstname, lastname, age, gender, contact_number) => {
    const sql = "UPDATE student SET firstname = ?, lastname = ?, age = ?, gender = ?, contact_number = ? WHERE id = ?";
    try {
        const result = await query(sql, [firstname, lastname, age, gender, contact_number, id]);
        return result.affectedRows;
    } catch (error) {
        throw new Error('Failed to update student');
    }
}