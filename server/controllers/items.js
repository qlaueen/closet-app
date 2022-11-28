import Item from "../models/item.js";
import express from 'express';
import mongoose from "mongoose";

const router = express.Router();

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createItem = async (req, res) => {
  const item = req.body;
  const newItem = new Item({ ...item, owner: req.userId, createdAt: new Date().toISOString() });
  try { 
    await newItem.save();
    res.status(201).json(newItem);
  }
  catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updateItem = async (req, res) => {
  const { id: _id } = req.params;
  const { title, colors, brand, category, owner, image, occasion } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No item with that id');
  }
  const updatedItem = { title, colors, brand, category, owner, image, occasion, _id };
  await Item.findByIdAndUpdate(_id, updatedItem, { new: true });
  res.json(updatedItem);
}

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No item with that id');
  }
  await Item.findByIdAndRemove(id);
  res.json({ message: 'Item deleted successfully' });
}