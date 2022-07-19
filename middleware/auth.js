const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({message: 'User not authenticated'});
  }
  
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({message: 'User not authenticated'});
  }

  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({message: 'Invalid token'})
  }
}