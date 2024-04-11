import { Schema, model, Types } from 'mongoose';
import IAdvisor from 'Interfaces/IAdvisor';

// 2. Create a Schema corresponding to the document interface.
const advisorSchema = new Schema<IAdvisor>({
    name: { type: String, required: true },
    dni: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    advisor_code: { type: String, required: true, unique: true },
    address:{ type: String, required: true }, // Dirección (opcional)
    date_of_birth: { type: String, required: true }, // Fecha de Nacimiento (opcional)
    gender: { type: String, required: true }, // Género (opcional)
    photo: { type: String, required: true }, // URL o ruta de la foto (opcional)
    password: { type: String, required: true }, // Contraseña
    join_date: { type: Date, default: null }, // Fecha de Ingreso
    specialization: { type: String, required: true },
});

// 3. Create a Model.
const Advisor = model<IAdvisor>('User', advisorSchema);

export default Advisor;