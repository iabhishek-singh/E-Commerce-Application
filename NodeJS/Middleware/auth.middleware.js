// Import JSON Web Token library for authentication
import jwt from 'jsonwebtoken';

// Middleware function to verify JWT for protected routes
const authenticate = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.headers.authorization?.split(" ")[1];
  // If no token provided, return 403 error (forbidden)
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Verify the token using the secret key
  jwt.verify(token, 'jwtSecret', (err, decoded) => {
    // If token is invalid or verification fails, return 401 error (unauthorized)
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Attach the decoded userId to the request for use in subsequent routes
    req.userId = decoded.userId;
    next();
  });
};

// Export the authentication middleware function
export default authenticate;
