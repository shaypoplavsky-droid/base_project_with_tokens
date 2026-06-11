// const { validateUser } = require("../validators/user.validator");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../services/users.service");
const userService = require("../services/users.service");
const { validateUser } = require("../validators/user.validator");

const getUsers = (req, res) => {
  try {
    const users = getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUser = (req, res) => {
  try {
    const user = getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// const createNewUser = (req, res) => {
//   try {
//     const user = createUser(req.body);

//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };


const createNewUser = (req, res) => {
  const error = validateUser(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }

  const result = userService.createUser(req.body);

  res.status(201).json({
    success: true,
    message: result.message,
    data: result.userCreated,
  });
};

const updateExistingUser = (req, res) => {
  try {
    const user = updateUser(
      req.params.id,
      req.body
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const removeUser = (req, res) => {
  try {
    const user = deleteUser(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createNewUser,
  updateExistingUser,
  removeUser,
};