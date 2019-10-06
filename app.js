const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();
const path = require('path');

app.use((req, res, next) => {
  req.user = {
    _id: '5d999a39eae33d0fc001dc0f'
  };

  next();
});

mongoose.connect('mongodb://localhost:27017/mestodb',  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});



app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRoutes);
app.use('/cards', cardsRoutes);
app.get('*', (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(PORT, () => {
  console.log('Ссылка на сервер:');
  console.log(BASE_PATH);
});

// app.get('/users/id/:id', (req, res)=> {
//   res.send(req.params);
// });