import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
  product_name: string;
  interests: number;
  credit_limit: number;
  annual_fee: number;
  rewards: string; // Or you could use a more specific type depending on the rewards program
  current_balance: number;
}

export default IProduct;