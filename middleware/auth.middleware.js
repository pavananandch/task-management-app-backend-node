const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(!token) {
            return res.sendStatus(401);
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.sendStatus(403);
            req.user = user;
            console.log(req.body)
            next();
        });
    } catch (error) {
        return res.sendStatus(400);
    }
}

module.exports = {authenticateToken};