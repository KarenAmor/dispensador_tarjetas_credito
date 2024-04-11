import { Schema, model, Types } from 'mongoose';
import IUser from 'Interfaces/IUser';

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    dni_img: {type: String, required: true},
    card_number: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    net_salary: { type: Number, required: true },
    date_of_birth: { type: Date, default: null }, // Field for the birthday
    advisor_code: { type: String, required: true }, // Many-to-many relationship with Asesores
    advisor: { type: String, required: true }, // Many-to-many relationship with Asesores
    product: { type: String, required: true },
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;