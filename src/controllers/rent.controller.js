const prisma = require("../utils/prismaClient");

const createRent = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0)
      return next(createError(400, "Product data not provided"));
    const rent = await prisma.rent.create({
      data: {
        user_id: req.body.user_id,
        product_id: Number(req.body.product_id),
        qty: Number(req.body.qty),
      },
    });
    res.json(rent);
  } catch (error) {
    next(error);
  }
};

const getRents = async (req, res, next) => {
  try {
    const rents = await prisma.rent.findMany({ include: { product: true } });
    res.json(rents);
  } catch (error) {
    next(error);
  }
};

const getRent = (req, res, next) => {
  res.send({ message: "coming soon..." });
};

const updateRent = (req, res, next) => {
  res.send({ message: "coming soon..." });
};

const deleteRent = (req, res, next) => {
  res.send({ message: "coming soon..." });
};

module.exports = {
  createRent,
  getRents,
  getRent,
  updateRent,
  deleteRent,
};
