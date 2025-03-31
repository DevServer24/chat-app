import * as jwt from 'jsonwebtoken';

// Secret key should be stored in your .env file
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';

// Sign a JWT token
export function signJwt(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify a JWT token
export function verifyJwt(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Error('Invalid or expired token');
  }
}

// Decode a JWT token
export function decodeJwt(token: string): any {
  return jwt.decode(token);
}
