const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'Sem token, autorização negada!' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.cadastro = decoded.cadastro;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
