const { Router } = require("express");
const UserController = require('./controller/UserController');

const router = Router();

router.get("/user/:id", UserController.getUser);
router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);
router.delete("/users/:id", checkPermission, UserController.deleteUser);
router.put("/users/:id", checkPermission, UserController.updateUser);

module.exports = router;