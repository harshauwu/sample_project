import { UserService } from '../../src/services/user.service';
import { User as UserModel } from '../../src/database/models/user';
import SequelizeMock from 'sequelize-mock';

// Setup sequelize mock
const dbMock = new SequelizeMock();
const UserMock = dbMock.define('User', {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    master_user_group_id: 1,
    company_id: 1,
    title: 'Developer',
    phone_number: '1234567890',
    last_name: 'Doe'
});

// Mock the User model imported in the UserService
jest.mock('../../src/database/models/user', () => ({
    User: UserMock
}));

describe('UserService', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService();
    });

    describe('Get User details by User Id', () => {
        it('should be return user details', async () => {
            const userId = 1;
            const companyId = 1;

            const user = await userService.getUserById(companyId, userId);

            expect(user).not.toBeNull();
            expect(user).toHaveProperty('id', userId);
            expect(user).toHaveProperty('name', 'John Doe');
            expect(user).toHaveProperty('email', 'john@example.com');
            expect(user).toHaveProperty('company_id', companyId);
        })
    })
});
