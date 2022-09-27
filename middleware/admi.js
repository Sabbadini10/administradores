const admin = ['ada', 'greta', 'vim', 'tim']

const admi = (req,res,next) => {
    if (admin.includes(req.query.user.toLowerCase())){
        next();
    } else {
        res.redirect("/login?error=true")
    }
}

module.exports = admi;