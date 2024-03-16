import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import errorFormatter from '../validators/common.validator';


import { UserService } from '../services/user.service';

import { ResponseCode } from '../configs/response-codes';
import { transform } from '../transformers/user.transform';
import { responseError, responseSuccess } from '../utils/util.service';


class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getUserData = async (req: Request, res: Response): Promise<Response> => {
        try {
            validationResult(req)
                .formatWith(errorFormatter)
                .throw();

            //Get users of the company users
            const user = await this.userService.getUserById(parseInt(req.params.user_id));
            return responseSuccess(
                res,
                {
                    data: transform(user)
                },
                ResponseCode.SUCCESS_OK
            );

        } catch (error: any) {
            console.log(`Error:: stack: ${error.stack}`);
            return responseError(
                res,
                (error.mapped && error.mapped()) || error.message,
                ResponseCode.UNPROCESSABLE_ENTITY
            );
        }
    }

   
}

const userController = new UserController();
export default userController;