let data = require("./fakeData");

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { job } = req.body;

  const userExists = data.find((user) => user.id === Number(id));

  if (!userExists) {
    res.status(400).json({ error: "User not found" });
  }

  data = data.map((user) => {
    if (user.id === Number(id)) {
      return {
        ...user,
        name,
        job,
      };
    }

    return user;
  });

  res.status(200).json({ id, name, job });
};

module.exports = {
  updateUser,
};
