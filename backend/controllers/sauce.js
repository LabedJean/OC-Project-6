const fs = require("fs");
const Sauce = require("../models/Sauce");

// Create sauce
exports.createSauce = (req, res) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id; // Supprime l'id généré automatiquement
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });
  sauce.save() // Enregistre la sauce 
    .then(() => res.status(201).json({ message: "Sauce ajoutée !" }))
    .catch(error => res.status(400).json({ error }));
};

// Get toutes les sauces
exports.getAllSauces = (req, res) => {
  Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
};
