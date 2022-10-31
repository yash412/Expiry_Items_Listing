const jwt = require('jsonwebtoken') ;

const protect = (req,res,next) => {
    try{
      let token = req.header('x-token') ;
      if(!token){
        return res.status(400).send("Token not found") ;
      }
      let decode = jwt.verify(token,"manikaran") ;
      req.mani = decode.user ;
      next() ;

    }catch(err){
        return res.status(500).send("Server error") ;
    }

}



module.exports = {protect}