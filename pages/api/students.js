import {createStudent} from '../../lib/students';

export default async function handler (req, res) {
    switch (req.method) {      
        case 'POST':
            const { firstname, lastname, age, gender, contact_number } = req.body;
            try {
                const studentId = await  createStudent(firstname, lastname, age, gender, contact_number);
                res.status(201).json({ message: 'Student created', studentId })
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
            break;
    }
}