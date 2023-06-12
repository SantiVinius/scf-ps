let data = require("./fakeData");

const createUser = (req, res) => {
  const { body } = req;
  const lastUserId = data[data.length - 1].id;

  const newUser = {
    id: lastUserId + 1,
    name: body.name,
    job: body.job,
  };

  data.push(newUser);

  res.status(200).json(newUser);
};

module.exports = {
  createUser,
};
