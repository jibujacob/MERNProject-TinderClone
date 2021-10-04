import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    name : String ,
    imgurl : String
  });

const dbCards = mongoose.model('dbCard', cardSchema);

export default dbCards;