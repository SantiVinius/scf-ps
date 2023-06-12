let data = require("./fakeData");

const getUser = (req, res) => {
  const { id } = req.params;
  
  const register = data.find((register) => register.id === Number(id));

  if (!register) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(register);
};

const getUsers = (req, res) => {
  res.status(200).json(data);
};

module.exports = {
  getUser,
  getUsers,
};
