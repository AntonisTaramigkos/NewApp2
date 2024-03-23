const mongoose =  require("mongoose");
const Schema = mongoose.Schema
const uniqueValidator = require("mongoose-unique-validator");

let productShema = new Schema  ({
    product :{type: String, required:true},
    cost: {type: Number, required: true},
    description: {type:String ,required: true},
    quantity: {type:Number, required: true}
},{
    collection: "products",
    timestamps :true
});
module.exports = mongoose.model("Product", productShema)