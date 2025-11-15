const mongoose = require('mongoose')
const config = require('./config/config.database.js')

mongoose.connect(config.url)
    console.log("Database connected").catch(err => {
        console.error("Database connection error:", err)
    });

const mongoose = require('mongoose')
const productModel = new mongoose.Schema(
  {
    productName: String,
    productLine: String,
    productScale: String,
    productVendor: String,
    productDescription: String,
    quantityInStock: Number,
    buyPrice: Number,
    MSRP: String,
    image: String,
    productID: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('product', productModel);
