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
        res.redirect('/employee')
    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }
};

const updateEmployee = async (req, res) => {
    const { eid, ename, eemail, ephone } = req.body;      
    try {
        const adresult = await db.query(queries.updateEmp, [ename, eemail, ephone, req.file.filename, eid])
        res.redirect('/employee')     
    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }
};

const deleteEmployee = async (req, res) => {
    try {    
        const adresult = await db.query(queries.deleteEmp, [req.params.id])
        res.status(200).json({ result: 'Record Deleted' })
    } catch (err) {
        console.log(err.message)
        res.json({ type: 'danger', message: err.message })
    }
}

module.exports = {
    getEmployees, addEmployee, insertEmployee, updateEmployee, deleteEmployee
}