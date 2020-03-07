const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  // app.get('/api/admin/createuser', async (req, res) => {
  //   const user = await new User({
  //     name: '',
  //     password: ''
  //   }).save();
  // });

  app.get('/api/admin/verify', async (req, res) => {
    console.log(req.body);
    const user = await User.find({
      name: 'ryan_dnton',
      password: 'Gobroncos15!'
    });

    const response = Object.keys(user).length ? true : false;
    res.send({ verified: response });
  });
};
