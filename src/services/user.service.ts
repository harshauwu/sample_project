
import { User } from '../database/models/user';

import { IUserAttributes} from '../interfaces/user-data';



export class UserService {

    async getUserById(userId?: number): Promise<IUserAttributes | null> {
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
