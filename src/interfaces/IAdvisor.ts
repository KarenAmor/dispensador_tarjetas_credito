import mongoose, { Schema, Document } from 'mongoose';

interface IAdvisor extends Document {
    name: string;
    dni: string;
    role: string;
    phone: string;
    email: string;
    advisor_code: string;
    address?: string; // Dirección (opcional)
    date_of_birth?: Date; // Fecha de Nacimiento (opcional)
    gender?: string; // Género (opcional)
    photo?: string; // URL o ruta de la foto (opcional)
    password: string; // Contraseña
    join_date: Date; // Fecha de Ingreso
    specialization?: string; // Área de Especialización (opcional)
}

export default IAdvisor;