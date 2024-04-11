import Advisor from "./IAdvisor";
import Product from "./IProduct";
import Cards from "./ICards";

import { Document } from 'mongoose';
interface IUser extends Document {
    name: string;
    dni: string;
    dni_img: String;
    card_number: Cards | null;
    phone: string;
    email: string;
    password: string;
    net_salary: number;
    date_of_birth?: Date;// Field for the birthday
    advisor_code?: Advisor | null; // Many-to-many relationship with Asesores
    advisor?: Advisor | null; // Many-to-many relationship with Asesores
    product: Product; // Many-to-one relationship with Productos
}

export default IUser;