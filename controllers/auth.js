const User = require("../models/user")
var jwt = require('jsonwebtoken')
var expressJwt = require("express-jwt")


exports.signup=(req,res)=>{
    const newUser = new User(req.body)

    newUser.save((err,user)=>{
        if(err){
            return res.status(400).json({
                error:"This Email id is already in use"
            })
        }
        else{
            res.json({
                name: user.name,
                email: user.email,
                id: user._id
            })
        }
    })
}

exports.signin=(req,res)=>{

    const {email, password} = req.body

    User.findOne({email},(err,user)=>{
        if(user && user.authenticate(password)){
            const token =jwt.sign({_id:user._id},process.env.SECRET,{expiresIn: 60*60*60})
            res.cookie("token",token)
        
            return res.status(200).json({
                token,
                name: user.name,
                email: user.email
            })
        }
        else{
            return res.status(400).json({
                error:"Credential Do Not Match"
            })
        }
    })
}

exports.signout=(req,res)=>{
    res.clearCookie("token")
    res.json({      
        message:"Signout success"
    })   
}

exports.isSignedIn=expressJwt({
    secret:process.env.SECRET,
    algorithms: ['HS256'],
    userProperty:"auth"
})

exports.isAuthenticated=(req,res,next)=>{
    let checker = req.profile && req.auth && req.profile._id == req.auth._id
    if(!checker){
        return res.json({
            error:"Not Authenticated"
        })
    }
    next()
}

exports.isOwner=(req,res,next)=>{
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "You are not an admin, Access Denied"
        })
    }
    next()
}