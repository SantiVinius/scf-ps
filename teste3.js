let data = require("./fakeData");

const deleteUser = (req, res) => {
  const { id } = req.params;

  data = data.filter((user) => user.id !== Number(id));
  console.log("New Data", data);
  res.status(200).json("sucess");
};

module.exports = {
  deleteUser,
};
