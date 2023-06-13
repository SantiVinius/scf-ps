const { Router } = require("express");
const UserController = require('./controller/UserController');

const router = Router();

router.get("/user", UserController.getUser);
router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);
router.delete("/users/:id", UserController.deleteUser);
router.put("/users/:id", UserController.updateUser);

module.exports = router;