const Card = require('../models/card');

module.exports.createCard = (req, res) => {
    const { name, link } = req.body;
    const owner = (req.user._id);

    Card.create({ name, link, owner })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getAddCards = (req, res) => {
  Card.find({})
        .then(card => res.send({ data: card }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.deleteCard = (req, res) => {
  User.findByIdAndRemove(req.params.id)
      .then(user => res.send({ data: user }))
      .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

