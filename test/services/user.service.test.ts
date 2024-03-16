import { UserService } from '../../src/services/user.service';
import { User as UserModel } from '../../src/database/models/user';
import SequelizeMock from 'sequelize-mock';

// Mock the User model imported in the UserService
jest.mock('../../src/database/models/user', () => {
    // Require SequelizeMock inside the factory function to avoid the hoisting conflict
    const SequelizeMock = require('sequelize-mock');
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

    return {
        User: UserMock
    };
});

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
    });

    describe('Get User details by User Id', () => {
        it('should be return user details', async () => {
            const userId = 1;
            const companyId = 1;

            const user = await userService.getUserById(userId);

            expect(user).not.toBeNull();
            expect(user).toHaveProperty('id', userId);
            expect(user).toHaveProperty('name', 'John Doe');
            expect(user).toHaveProperty('email', 'john@example.com');
            expect(user).toHaveProperty('company_id', companyId);
        })

        it('should throw an error if userId is null', async () => {
            expect.assertions(1); // Expect one assertion in this test block

            try {
                await userService.getUserById(null as any);
            } catch (error) {
                expect(error).toEqual(new Error('The user ID must not be null or undefined.'));
            }
        });

        it('should throw an error if userId is undefined', async () => {
            expect.assertions(1); // Expect one assertion in this test block

            try {
                await userService.getUserById(undefined as any);
            } catch (error) {
                expect(error).toEqual(new Error('The user ID must not be null or undefined.'));
            }
        });
    })
});