import User from "./IUser";
import Transaction from "./ITransaction";
import Product from "./IProduct";
import mongoose, { Schema, Document } from 'mongoose';

interface ICards extends Document{
card_number: string;
  security_code: number;
  card_type?: Product;
  available_balance?: number;
  request_status?: string;
  user_id?: User | null;
  creation_date?: Date;
  expiration_date?: Date;
  currency_type?: string;
  last_transaction?: Date;
  card_status?: 'Active' | 'Suspended' | 'Cancelled' | 'Lost';
  last_modified_date?: Date;
  transaction_history?: Transaction[];
}

export default ICards;