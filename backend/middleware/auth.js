require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]; // Récupère le token
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        const { userId } = decodedToken;
        if (req.body.userId && req.body.userId !== userId) {
        throw new Error("ID de l'utilisateur non valable !");
        } else {
        next();
        }
    } catch (error) {
        res.status(401).json({ error: error || "Requête non authentifiée !" });
    }
};