import { Document } from 'mongoose';
import AdvisorSchema from '../../Schemas/advisorSchema';
import IAdvisor from '../../Interfaces/IAdvisor';

export class RegisterAdvisorService {
    constructor(private readonly advisorSchemaRepository: typeof AdvisorSchema) {}

    async createAdvisor(advisorData: IAdvisor): Promise<Document> {
        const advisorObj: Document = await this.advisorSchemaRepository.create(advisorData);
        return advisorObj;
    }
}