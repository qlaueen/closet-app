import mongoose from 'mongoose';

const itemSchema = mongoose.Schema({
  title: String,
  colors: [String],
  brand: String,
  // category: String, this will be reffed to another one...
  name: String, 
  image: String,
  occasion: String,
  owner: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Item = mongoose.model('Item', itemSchema);

export default Item;