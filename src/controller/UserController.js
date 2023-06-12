let data = require("../mock/fakeData");

class UserController {
  // INÍCIO Teste 1
  getUser(req, res) {
    const { id } = req.params;

    const register = data.find((register) => register.id === Number(id));

    if (!register) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(register);
  }

  getUsers = (req, res) => {
    res.status(200).json(data);
  };
  // FIM Teste 1

  // INÍCIO Teste 2
  createUser(req, res) {
    const { body } = req;
    const lastUserId = data[data.length - 1].id;

    const newUser = {
      id: lastUserId + 1,
      name: body.name,
      job: body.job,
    };

    data.push(newUser);

    res.status(200).json(newUser);
  }
  // FIM Teste 2

  // INÍCIO Teste 3
  deleteUser(req, res) {
    const { id } = req.params;

    data = data.filter((user) => user.id !== Number(id));

    res.status(200).json("sucess");
  }
  // FIM Teste 3

  // INÍCIO Teste 4
  updateUser(req, res) {
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
  }
  // FIM Teste 4

  // INÍCIO Teste 5
  countUser(req, res) {
    const { name } = req.body;

    res.send("Usuário " + name + "  foi lido 0 vezes.");
  }
  // FIM Teste 5
}

module.exports = new UserController();
