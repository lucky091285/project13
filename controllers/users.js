const User = require('../models/user');

module.exports.createUser = (req, res) => {
  console.log(req.body)
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
      .then(user => res.send({ data: user }),)
      .catch(err => res.status(500).send({ message: `Произошла ошибка при создании пользователя -- ${err}` }));
};

module.exports.getAllUsers = (req, res)=> {
  User.find({})
        .then(users => res.send({ data: users }))
        .catch(err => res.status(500).send({ message: `Произошла ошибка при добавлении пользователей -- ${err}` }));
};

module.exports.getSingleUser = (req, res) => {
  User.findById(req.params.id)
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: `Нет пользователя с таким id -- ${err}` }));
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
        .catch(err => res.status(500).send({ message: `Профиль не обновился -- ${err}` }));
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
        .catch(err => res.status(500).send({ message: `Аватар не обновился -- ${err}` }));
};