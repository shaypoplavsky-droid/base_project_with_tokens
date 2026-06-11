const router = require("express").Router();

const {
  getUsers,
  getUser,
  createNewUser,
  updateExistingUser,
  removeUser,
} = require("../controllers/users.controller");

router.get("/list", getUsers);

router.get("/get/:id", getUser);

router.post("/create", createNewUser);

router.put("/update/:id", updateExistingUser);

router.delete("/delete/:id", removeUser);

module.exports = router;