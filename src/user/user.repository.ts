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
      friends: ['Shachar', 'David', 'Elad'],
    },
  ];
  constructor() {}

  findAll(): UserEntity[] {
    return this.users;
  }

  findOne(id: string): UserEntity | undefined {
    return this.users.find((user) => user.id === '1');
  }
  remove(id: string): void {
    const removeId = this.users.findIndex((user) => user.id === id);
    if (removeId !== -1) {
      this.users.splice(removeId, 1);
    } else {
      console.log('error');
    }
  }
}
