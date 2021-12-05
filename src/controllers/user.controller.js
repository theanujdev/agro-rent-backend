const createUser = (req, res, next) => {
  res.send({ message: "createUser" });
};

const getUsers = (req, res, next) => {
  res.send({ message: "getUsers" });
};

const getUser = (req, res, next) => {
  res.send({ message: "getUser" });
};

const updateUser = (req, res, next) => {
  res.send({ message: "updateUser" });
};

const deleteUser = (req, res, next) => {
  res.send({ message: "deleteUser" });
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
