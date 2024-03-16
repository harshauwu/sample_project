
import { User } from '../database/models/user';

import { IUserAttributes} from '../interfaces/user. interface';



export class UserService {

    async getUserById(userId: number): Promise<IUserAttributes | null> {

        if (userId === null || userId === undefined) { 
            // Throwing a specific error message is preferred for easier debugging.
            throw new Error('The user ID must not be null or undefined.');
        }

        try {     
            return User.findOne({
                where: { id: userId },
                attributes: ['id', 'name', 'email', 'master_user_group_id', 'company_id', 'title', 'phone_number', 'last_name'],
            });
        } catch (error) {
            console.error('Error fetching user by ID:', error);
            throw error; // Rethrow the error after logging or handle it as needed
        }
    }
}
