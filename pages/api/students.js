import { createStudent, getStudent, updateStudent } from '../../lib/students';

export default async function handler (req, res) {
    switch (req.method) {      
        case 'GET':
            try {
                var students = await getStudent();
                res.status(200).json(students);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            break

        case 'POST':
            var { firstname, lastname, age, gender, contact_number } = req.body;
            try {
                const studentId = await  createStudent(firstname, lastname, age, gender, contact_number);
                res.status(201).json({ message: 'Student created', studentId })
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
            break;

        case 'PUT':
            var {id: updateId, firstname, lastname, age, gender, contact_number} = req.body;
            try {
                const affectedRows = await updateStudent(updateId, firstname, lastname, age, gender, contact_number);
                if (affectedRows > 0) {
                    res.status(200).json({message: "Update Successfully"})
                } else {
                    res.status(404).json({message: "Update Failed"})
                }
            } catch (error) {
                res.status(500).json({ error: error.message });
            }

        default:
            res.status(405).json({ message: 'Method Not Allowed' });
            break;
    }
}