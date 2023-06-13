const { Router } = require("express");
const UserController = require("./controller/UserController");
const checkPermissions = require("./middleware/checkPermission");

const router = Router();

router.get("/user", UserController.getUser);
router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);
router.put("/users/:id", checkPermissions(['edit']), UserController.updateUser);
router.delete("/users/:id", checkPermissions(['delete']), UserController.deleteUser);

module.exports = router;
