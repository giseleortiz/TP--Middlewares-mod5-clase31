module.exports = {
    index: (req,res) => {
        return res.render('index')
    },
    
    about: (req,res) => {
        return res.render('about')
    },
    
    contact: (req,res) => {
        return res.render('contact')
    },

    admin: (req,res) => {
        return res.render('admin', {
            admin:req.query.username
        })
    },

    login: (req,res) => {
        return res.render('login')
    },

    noAccess: (req,res) => {
        console.log(req.query);
        return res.render('no-access')
    },
    
}