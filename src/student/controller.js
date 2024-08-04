const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) =>{
    pool.query(queries.getStudents, (error, results) =>{
        if(error) throw error;
        return res.status(200).json(results.rows);
    })
}

const getStudentById = (req, res)=>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results)=>{
        if(error) throw error;
        return res.status(200).json(results.rows)
    })
}

const addStudent = (req, res) =>{
    const {name, email, age, dob} = req.body;

    //check if email exist
    pool.query(queries.checkEmailExist, [email], (error, results) =>{
        if(results.rows.length) {
           return res.send("Email already exist")
        }
    //add student to the DB
    pool.query(queries.addStudent, [name, email, age, dob], (error, results)=>{
        if(error) throw error;
        return res.status(201).send("Student Created Successfully");
        
    })    
    })
}

const removeStudent = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById, [id], (error, results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            return res.send("Student does not exist");
        }
        pool.query(queries.removeStudent, [id], (error, results) =>{
            if(error) throw error;
            return res.status(200).send("Student remove successfully!");
        })
    })
}

const updateStudent = (req, res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;
    
    pool.query(queries.getStudentById, [id], (error, results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            return res.send("Student does not exist");
        }
    
        pool.query(queries.updateStudent, [name, id], (error, results)=>{
            if(error) throw error;
            return res.status(200).send("Student updated successfully");
        })
    })
}

const updateStudentEmail = (req, res)=>{
    const id = parseInt(req.params.id);
    const {email} = req.body;
    
    pool.query(queries.getStudentById, [id], (error, results) =>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            return res.send("Student email does not exist");
        }
    
        pool.query(queries.updateStudentEmail, [email, id], (error, results)=>{
            if(error) throw error;
            return res.status(200).send("Student email updated successfully");
        })
    })
}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudent,
    updateStudent,
    updateStudentEmail
}