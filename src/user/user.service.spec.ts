import { UserService } from './user.service';
import { UserRepository } from './user.repository';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Partial<UserRepository> ;

  beforeEach(async () => {

    userRepository = {
      findOne: jest.fn(),
    };

    service = new UserService(userRepository as UserRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
