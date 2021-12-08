const createError = require("http-errors");
const prisma = require("../utils/prismaClient");

const getProducts = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { stock: true },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        product_id: Number(productId),
      },
      include: {
        stock: true,
      },
    });
    if (product === null)
      return next(
        createError(404, `Product with ID ${productId} doesn't exist`)
      );
    res.json(product);
  } catch (error) {
    next(createError(500, "Something went wrong"));
  }
};

const createProduct = async (req, res, next) => {
  try {
    if (Object.keys(req.body).length === 0)
      return next(createError(400, "Product data not provided"));
    const product = await prisma.product.create({
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await prisma.product.update({
      where: {
        product_id: Number(productId),
      },
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await prisma.product.delete({
      where: {
        product_id: Number(productId),
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
