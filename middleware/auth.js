module.exports = {
    ensureAuth: (req, res, next)=>{
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/signin')
        }

    },
    ensureGuest: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect('/user/dashboard')
        } else {
            return next()
        }
    }
}