const User = require('../models/user');

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