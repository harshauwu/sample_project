import { Router, Request, Response } from 'express';

import userRoutes from './v1/user.routes';

// import { authMiddleware }  from '../../middleware/auth.middleware';

class Routes {

    public router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {

        // question route
        this.router.use("/user", userRoutes);
        


        /* GET home page. */
        this.router.get('/', (req: Request, res: Response) => {
            res.json({
                status: 'success',
                message: 'User Service API',
                data: { version_number: 'v1.0.0' }
            });
        });

        this.router.get('/health', (req: Request, res: Response) => {
            res.statusCode = 200;
            const healthCheck = {
                uptime: process.uptime(),
                message: 'OK',
                timestamp: Date.now()
            };

            try {
                res.status(200).send(healthCheck);  
            } catch (error: any) {
                healthCheck.message = error;
                res.status(503).send();
            }
        });
    }
}

export default new Routes().router;