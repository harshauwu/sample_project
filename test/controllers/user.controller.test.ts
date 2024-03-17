// user.controller.test.ts
import userController from '../../src/controllers/user.controller';
import { UserService } from '../../src/services/user.service';
import { validationResult } from 'express-validator';
import { responseSuccess, responseError } from '../../src/utils/util.service';
import errorFormatter from '../../src/validators/common.validator';

// Mock dependencies
jest.mock('../../src/services/user.service', () => {
  return {
    UserService: jest.fn().mockImplementation(() => ({
        getUserById: jest.fn().mockResolvedValue({ id: 1, name: 'John Doe' }),
    })),
  };
});

jest.mock('../../src/utils/util.service', () => ({
  responseSuccess: jest.fn(),
  responseError: jest.fn(),
}));

jest.mock('express-validator', () => ({
  validationResult: jest.fn().mockReturnValue({
    formatWith: jest.fn().mockReturnThis(),
    throw: jest.fn(),
  }),
}));

jest.mock('../../src/validators/common.validator', () => jest.fn().mockImplementation(() => 'Formatted error message'));

// Correct the way to access the mock method for assertion
const userServiceInstance = new UserService();

// Begin unit tests
describe('UserController', () => {
    describe('getUserData method', () => {
      it('should return user data successfully', async () => {
        // Arrange
        const mockReq = { params: { user_id: '1' } } as any; // Mocking the Request object
        const mockRes = {
          json: jest.fn(),
          status: jest.fn().mockReturnThis(),
        } as any; // Mocking the Response object
  
        // Directly use the mocked method from the instance
        const mockGetUserById = userServiceInstance.getUserById as jest.Mock;
        mockGetUserById.mockResolvedValue({ id: 1, name: 'John Doe' });
  
        // Act
        await userController.getUserData(mockReq, mockRes);
  
        // Assert
        expect(responseSuccess).toHaveBeenCalledWith(
          mockRes,
          { data: expect.anything() }, 
          expect.anything() 
        );
      });
    });
  });
