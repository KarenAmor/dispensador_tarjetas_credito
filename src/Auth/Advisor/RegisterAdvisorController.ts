import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { RegisterAdvisorService } from './RegisterAdvisorService';
import IAdvisor from 'Interfaces/IAdvisor';

export class RegisterAdvisorController {
    constructor(private readonly registerService: RegisterAdvisorService) {}

    async createAdvisor(request: Request, response: Response): Promise<Response> {
        try {
            const advisorData: IAdvisor = request.body;
            const createAdvisor = await this.registerService.createAdvisor(advisorData);
            
            return response.status(StatusCodes.CREATED).json(createAdvisor);
        } catch (err: any) {
            return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
        }
    }
}