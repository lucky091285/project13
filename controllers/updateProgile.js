const User = require('../models/user');

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