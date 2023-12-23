const queries = require('../queries/employee.query');
const db = require('../config/dbConfig');
const createError = require('http-errors')

const getEmployees = async (req, res) => {
    try {
        const result = await db.query(queries.getEmployees)
        res.render('./emp/empList', { title: 'Employees', email: req.session.email, emplst: result.rows });
    } catch (error) {
        res.json({ type: 'danger', message: error.message })
    }
};

const addEmployee = (req, res) => {
    res.render('add_emp', { title: 'Add Employee', email: req.session.email })
};

const insertEmployee = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const adresult = await db.query(queries.addEmp, [name, email, phone, req.file.filename])
        res.redirect('./emp/empList', { title: 'Employees', email: req.session.email })
    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }
};
const updateEmployee = async (req, res) => {
    const { id, name, email, phone } = req.body;   
    try {
        const adresult = await db.query(queries.updateEmp, [name, email, phone, id])
        res.status(200).json({ result: 'Record Upated' })

    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }
};
const deleteEmployee=async(req,res)=>{       
    try {
        const id=req.params.id;
        console.log(id)
        const adresult = await db.query(queries.deleteEmp, [id])
        res.status(200).json({ result: 'Record Deleted' })
       
    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }  
}


module.exports = {
    getEmployees, addEmployee, insertEmployee, updateEmployee,deleteEmployee
}