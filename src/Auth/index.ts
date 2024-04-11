import { Router, Request, Response } from 'express';
import { RegisterAdvisorController } from './Advisor/RegisterAdvisorController';
import { RegisterAdvisorService } from './Advisor/RegisterAdvisorService';
import AdvisorSchema from '../Schemas/advisorSchema';
const router: Router = Router();

router.post('/register/advisor', async (req: Request, res: Response) => {
	const service = new RegisterAdvisorService(AdvisorSchema);
	const controller = new RegisterAdvisorController(service);
	return await controller.createAdvisor(req, res);
});

export default router;