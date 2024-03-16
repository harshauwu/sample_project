import { Request, Response, NextFunction, RequestHandler } from 'express';
import { responseForbiddenError } from '../utils/util.service';
import { UserService } from '../services/user.service';

export const companyUser = (): RequestHandler => {
    // Return a middleware
    return async (req: Request, res: Response, next: NextFunction) => {
        //const companyId: number = req.user.company_id

        // Check if user_id is provided and is a valid number
        if (!req.params.user_id || isNaN(Number(req.params.user_id))) {
            // Handle the error appropriately, e.g., by sending a bad request response
            return responseForbiddenError(res); // Invalid or missing user_id parameter
        }


        const userId: number = parseInt(req.params.user_id);

        // const userService = new UserService();
        // const user = await userService.validateUserId(userId, companyId);
        // if (user == null) {
        //     return responseForbiddenError(res);
        // } else {
            next();
        //}
    };
};