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
//put method

// app.put("/students/update/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const { branch } = req.body;

//     // Check if branch is provided
//     if (!branch || branch.trim() === "") {
//         return res.status(400).json({
//             message: "New branch is required"
//         });
//     }

//     // Find student
//     const student = students.find(
//         (student) => student.id === id
//     );

//     // If student not found
//     if (!student) {
//         return res.status(404).json({
//             message: "Student not found"
//         });
//     }

//     // Update branch
//     student.branch = branch;

//     res.json({
//         message: "Branch updated successfully",
//         student
//     });
// });
//using spread operator
app.put("/students/update/:id", (req, res) => {
    const id = Number(req.params.id);
    const { branch } = req.body;

    // validation
    if (!branch || branch.trim() === "") {
        return res.status(400).json({
            message: "New branch is required"
        });
    }

    // find index
    const index = students.findIndex(
        (student) => student.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    // spread operator to update
    students[index] = {
        ...students[index],   // old data
        branch                // updat hone k baad
    };

    res.json({
        message: "Branch updated successfully using spread method",
        student: students[index]
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});