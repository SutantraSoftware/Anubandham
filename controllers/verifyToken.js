const jwt = require('jsonwebtoken');
const secret_key = 'jdjhalirioaiodn$#@isdnaai289402i402asdw';


const verifyToken = (req,res,token)=>{
    const token = req.headers('authorization')
    console.log('token is', token)

    if(!token){
        res.status(403).send("A token is required for authentication");
    }else{
        try{
            const decodedToken = jwt.verify(token,secret_key)
            req.decodedToken = decodedToken;
        }catch{
            res.json({status:'error',data:"Something went wrong"})
        }
    }
    return next()
}
module.exports = verifyToken;