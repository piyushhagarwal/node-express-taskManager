const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  let products = await Product.find({ name: "accent chair" });
  res.json({ products, noOfProducts: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query; //req.query return an object of queries
  const queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? "true" : "false";
  }
  if (company) {
    queryObj.company = company;
  }

  if (name) {
    queryObj.name = { $regex: name, $options: "i" };
    // To search if a certain part is present in name
    // options i means its case insentitive
  }

  let products = await Product.find(queryObj).sort("name -price");
  //if we want to sort only by name use sort('name')
  //if we want to use multiple parameters sort('name price ')
  //the - sign is used to do the opposite task for eg here it instead of showing price in ascending order it shows it in descending order

  res.json({ products, noOfProducts: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
