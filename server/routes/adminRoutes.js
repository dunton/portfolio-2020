const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {
  // app.get('/api/admin/createuser', async (req, res) => {
  //   const user = await new User({
  //     name: '',
  //     password: ''
  //   }).save();
  // });

  app.post('/api/admin/login', async (req, res) => {
    const { userName, password } = req.body;

    const user = await User.findOne({
      name: userName
    });

    if (user && password === user.password) {
      res.send({ verified: true });
      return;
    }

    res.send({ verified: false });
  });

  app.post('/api/admin/logout', async (req, res) => {
    res.send({ verified: false });
  });
};
