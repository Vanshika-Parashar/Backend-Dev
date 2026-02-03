import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

const students = [
    { id: 1, name: "john", branch: "CSE" },
    { id: 2, name: "jane", branch: "ECE" },
    { id: 3, name: "doe", branch: "MECH" },
];

app.get("/", (req, res) => {
    res.send("Welcome to Express page");
});

app.get("/students", (req, res) => {
    const branch = req.query.branch;

    if (branch) {
        const filtered = students.filter(
            (student) => student.branch === branch
        );

        return res.json(filtered);
    }

    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(
        (student) => student.id === id
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

app.post("/students/register", (req, res) => {
    const { id, name, branch } = req.body;

    console.log("<<<", req.body);

    if (!id || !name || !branch) {
        return res.status(400).json({
            message: "All fields (id, name, branch) are required"
        });
    }

    const exists = students.find(
        (student) => student.id === id
    );

    if (exists) {
        return res.status(409).json({
            message: "Student with this ID already exists"
        });
    }

    const newStudent = {
        id,
        name,
        branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student registered successfully",
        student: newStudent
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});