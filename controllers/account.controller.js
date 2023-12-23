const db = require('../config/dbConfig')
const queries = require("../queries/account.queries");
const createError = require('http-errors')
const bcrypt = require('bcrypt');

const LoginPage = async (req, res) => {
    res.render('./account/login', { layout: './layouts/blank', title: 'Prime Tech - Login' });
}

const RegisterPage = async (req, res) => {
    res.render('./account/register', { layout: './layouts/blank', title: 'Prime Tech - Register' });
}

const InsertUser = async (req, res) => {
    const { name, email, mobile, password } = req.body;
    try {
        const hashpwd = bcrypt.hashSync(password, 10);

        const adresult = await db.query(queries.addUser, [name, email, mobile, hashpwd])

        res.render('account/register', {layout: './layouts/blank', title: 'Prime Tech - Register', message: 'Inserted!' })

    } catch (error) {
        console.log(error)
    }
}

const GetUsers = async (req, res) => {
    try {
        const result = await db.query(queries.getUsers)
        console.log(result.rows)
        res.render('./account/users', { title: 'Users', email: req.session.email, users: result.rows });
    } catch (error) {
        res.json({ type: 'danger', message: error.message })
    }
}

const verifyUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userResult = await db.query(queries.getUserByEmail, [email])

        if (userResult.rowCount != 0) {
            const pwdMatch = bcrypt.compareSync(password, userResult.rows[0].password)
            if (!pwdMatch) res.render('./account/login', {layout: './layouts/blank', message: 'Password is incorrect!' })
            else {
                req.session.email = email
                res.redirect('/home')
            }
        }
        else res.render('./account/login', {layout: './layouts/blank', message: 'Invalid Username or password' })

    } catch (error) {
        console.log(error)
    }
}

const LogOut = async (req, res) => {
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
    LoginPage, RegisterPage, InsertUser, verifyUser, LogOut, GetUsers
}