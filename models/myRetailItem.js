var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var myRetailItemSchema = new Schema({
  myRetailId: { type: Number, required: true },
  // Price of any item is $29.99 by default until a better method is created
  price: { type: Number, default: 29.99 },
  // Currency is USD by default until a better method is created
  currency: { type: String, default: "USD" }
});

// This creates our model from the above schema, using mongoose's model method
var myRetailItem = mongoose.model("myRetailItem", myRetailItemSchema);

// Export the model
module.exports = myRetailItem;
