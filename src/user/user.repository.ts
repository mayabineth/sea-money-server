import { UserEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [
    {
      id: '1',
      name: 'Daniel',
      age: 25,
      defaultCurrency: 'ILS',
      connections: ['Shachar', 'David', 'Elad'],
      messages: [],
    },
  ];

  findOne(id: string): UserEntity | undefined {
    return this.users.find((user) => user.id === '1');
  }
}
