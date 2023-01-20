import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let userService: Partial<UserService>;

  beforeEach(async () => {
    userService = {
      create: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
    }
    controller = new UserController(userService as UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
