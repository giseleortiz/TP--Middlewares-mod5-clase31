const admins = ['GISELE', 'Greta', 'Vim', 'Tim']

const accessAdmin = (req,res,next) => {
    if(admins.includes(req.query.username)){
        return next()
    }
    return res.redirect('/no-access')

}

module.exports = accessAdmin