const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/SmartWater', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const schemaProduct = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: Number,
});

const Product = mongoose.model('test', schemaProduct);

module.exports = Product;
