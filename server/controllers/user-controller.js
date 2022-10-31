const User = require('../models/user-model') ;
const bcrypt = require('bcryptjs') ;
const jwt = require('jsonwebtoken') ;
const register = async(req,res,next) => {

    try{
        let existingUser  =  await User.findOne({email:req.body.email}) ;
        if(existingUser){
            return res.status(409).json({message:"User already exists"}) ;
        }
        const user  = new User({
               name:req.body.name ,
               email:req.body.email ,
               password:bcrypt.hashSync(req.body.password)
        }) ;
        await user.save() ;
        return res.status(201).json({message:"User created Successfully" , user}) ;
    }catch(err){
      return res.status(400).json({error:err.message}) ;
    }  
}

const login = async(req,res,next) => {
    try{
        let user = await User.findOne({email:req.body.email}) ;
        if(!user){
            return res.status(404).json({message:" Not Found "}) ;
        }
        const isMatch = bcrypt.compareSync(req.body.password , user.password) ;
        if(!isMatch){
            return res.status(401).json({message:"Unauthorised , Invalid credinitials"}) ;
        }
        
        // let payload = {
        //     user:{
        //         id:user._id
        //     }
        // }
        // jwt.sign(payload,"manikaran",{expiresIn:'1h'},(err,token) => {
        //     if(err) throw err ;
        //     return res.json({token}) ;
        // }
        // ) ;
        return res.status(200).json(user) ;
        
    }catch(err){
        return res.status(400).json({error:err.message}) ;
    }
}

const myprofile = async(req,res,next) => {
    try{
        let exist = await User.findById(req.mani.id).select('-password') ;
        if(!exist){
            return res.status(400).send("not found") ;
        }
        res.json(exist) ;

    }catch(err){
     return res.status(500).send("Server error") ;
    }

}


module.exports = {register , login ,myprofile} ;

