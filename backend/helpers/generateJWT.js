import jwt from 'jsonwebtoken'

export function generateJWT(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
}