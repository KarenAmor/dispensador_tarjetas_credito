import User from "./IUser";
import Cards from "./ICards";
import Product from "./IProduct";

import mongoose, { Schema, Document } from 'mongoose';
interface ITransaction extends Document {
    card: Cards;
    date: Date;
    amount: number;
    status: string;
    transaction_type: 'Purchase' | 'Withdrawal' | 'Payment';
    interests?: Product | null;
    handling_fee?: number | null;
    total_amount_to_pay: number;
    description?: string;
    userId?: User; // Associated user ID
    currency_type?: string;
    location?: string;
}

export default ITransaction;