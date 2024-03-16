import { Router } from 'express';
import UserController from '../../../controllers/user.controller';
import { validateUserId } from '../../../validators/user.validator'

class User {

    public router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {

        this.router.get(
            '/:user_id', 
            validateUserId(), 
            UserController.getUserData
        );
    }

}

export default new User().router;