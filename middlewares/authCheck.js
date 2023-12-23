const isLogIn = async (req, res, next) => {
    try {
        if (!req.session.email)  return res.redirect('/login')
        next();
    } catch (error) { console.log(error) }
}

const isLogOut = async (req, res, next) => {
    try {
        if (req.session.email) return res.redirect('/home')
        next();
    } catch (error) { console.log(error) }
}

module.exports = { isLogIn, isLogOut }