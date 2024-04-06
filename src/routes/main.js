const express = require('express');
const { index, contact, about, admin, login, noAccess } = require('../controllers/mainController');
const accessAdmin = require('../middlewares/accessAdmin');
const router = express.Router();

/* / */
router.get('/', index)
router.get('/about', about)
router.get('/contact', contact)
router.get('/admin',accessAdmin, admin)
router.get('/login', login)
router.get('/no-access', noAccess)




module.exports = router