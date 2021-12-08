const prisma = require("../utils/prismaClient");

const createUser = (req, res, next) => {
  res.send({ message: "createUser" });
};

const getUsers = async (req, res, next) => {
  const users = await prisma.user.findMany();
  res.json(users);
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
