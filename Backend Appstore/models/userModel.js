const mongoose = require("mongoose");

const appSchema = new mongoose.Schema({
    appId:Number,
    appName:String,
    imageUrl:String,
    category:String
  },{collection:"apps"});
  
const App = mongoose.model("", appSchema);

module.exports = App;