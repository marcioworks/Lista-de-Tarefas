const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const authConfig = require('../../config/auth')

module.exports = async (req,res,next)=>{
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).json({error: 'Token inexistente.'})
  }

  const [, token] = authHeader.split(' ')

  try{
    const decodificar = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decodificar.id;

    return next()
  }
  catch(err){
    return res.status(401).json({error: 'Não Autorizado'})
  }
}