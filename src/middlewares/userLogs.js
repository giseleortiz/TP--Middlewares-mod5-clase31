const {appendFileSync} = require('fs')

const userLogs = (req,res,next) => {
    appendFileSync('./src/logs/userLogs.txt', `El usuario ingresó a la ruta ${req.url} \n`)
    next()
}

module.exports = userLogs