const Product = require("../model/Product.model");

const getAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProducts = await Product.find();
      resolve({
        status: "OK",
        message: "All products fetched successfully",
        data: allProducts,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const addProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }
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
    } = newProduct;

    try {
      const createProduct = await Product.create({
        id,
        name,
        main_mage,
        image_1,
        image_2,
        image_3,
        image_4,
        category,
        new_price,
        old_price,
      });

      if (createProduct) {
        resolve({
          status: "OK",
          message: "SUCCESS",
          data: createProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({ _id: id });
      if (!checkProduct) {
        resolve({
          status: "ERR",
          message: "The product is not defined",
        });
      }
      await Product.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete product success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
};
