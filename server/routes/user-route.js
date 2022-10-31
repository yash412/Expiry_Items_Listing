const router = require('express').Router() ;

const {register , login ,myprofile} = require('../controllers/user-controller') ;
const {protect} = require('../middlewares/protect') ;

router.post('/register',register) ;
router.post('/login', login) ;
// router.get('/myprofile',protect,myprofile) ;
router.get('/myprofile',myprofile) ;






module.exports = router ;