import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'student-management', 
});

export const query = async (sql, values) => {
  const [results] = await pool.execute(sql, values);
  return results;
};
