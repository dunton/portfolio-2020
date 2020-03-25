const mongoose = require('mongoose');
const Project = mongoose.model('projects');

module.exports = app => {
  app.post('/api/projects/save', async (req, res) => {
    const { name, link, image, id } = req.body;

    if (req.body.id) {
      const project = await Project.findOneAndUpdate(
        { _id: id },
        { name, link, image }
      );
      const projects = await Project.find();
      res.send(projects);
      res.sendStatus(200);
      return;
    }

    await new Project({
      name: name,
      link: link,
      image: image
    }).save();

    const projects = await Project.find();
    res.send(projects);
    res.sendStatus(200);
  });

  app.get('/api/projects/findAll', async (req, res) => {
    const projects = await Project.find().sort({ _id: -1 });
    res.send(projects);
    res.sendStatus(200);
  });

  app.post('/api/projects/delete', async (req, res) => {
    await Project.findById(req.body.id)
      .deleteOne()
      .catch(err => console.log(err));
    const projects = await Project.find();
    res.send(projects);
    res.sendStatus(200);
  });
};
