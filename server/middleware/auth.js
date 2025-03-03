const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

  try {

    const token = req.cookies.token

    if (!token) {
      return res.status(401).json({message: "Unauthorized"})
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "RANDOM_TOKEN_SECRET")
    if (typeof decodedToken === 'object' && decodedToken !== null && 'userId' in decodedToken) {
      req.userData = { userId: decodedToken.userId };
      next();
    } else {
      res.status(401).json({message: "Invalid token format"})
    }
    
  } catch (error) {
    
    res.status(401).json({message: "Invalid or expired token"})
  }
  
}
