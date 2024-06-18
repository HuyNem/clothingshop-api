const ProductService = require("../service/ProductService");

const getAllProducts = async (req, res) => {
  try {
    const response = await ProductService.getAllProducts();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const {
      name,
      main_mage,
      image_1,
      image_2,
      image_3,
      image_4,
      category,
      new_price,
      old_price,
    } = req.body;
    if (
      !name ||
      !main_mage ||
      !image_1 ||
      !image_2 ||
      !image_3 ||
      !image_4 ||
      !category ||
      !new_price ||
      !old_price
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await ProductService.addProduct(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(404).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await ProductService.deleteProduct(productId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,

};
