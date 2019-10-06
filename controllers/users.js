const User = require('../models/user');

module.exports.getAllUsers = (req, res)=> {
  User.find({})
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.getSingleUser = (req, res) => {
  User.findById(req.params.id)
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: '"Нет пользователя с таким id' }));
};

module.exports.createUser = (req, res) => {
    const { name, about, avatar } = req.body;

    User.create({ name, about, avatar })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.update({ name, about })
    User.findByIdAndUpdate(req.params.id, { name, about },
      {
        new: true,
        runValidators: true,
      })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;

  User.update({ avatar })
    User.findByIdAndUpdate(req.params.id, { avatar },
      {
        new: true,
        runValidators: true,
      })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};