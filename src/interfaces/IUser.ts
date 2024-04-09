import Advisor from "./IAdvisor";
import Product from "./IProduct";
import Cards from "./ICards";

import { Document } from 'mongoose';
interface IUser extends Document {
    name: string;
    dni: number;
    card_number: Cards | null;
    email: string;
    password: string;
    net_salary: number;
    birthday: Date; // Field for the birthday
    advisor_code?: Advisor | null; // Many-to-many relationship with Asesores
    advisor?: Advisor | null; // Many-to-many relationship with Asesores
    product: Product; // Many-to-one relationship with Productos
}

export default IUser;