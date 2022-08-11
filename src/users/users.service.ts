import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = any; //ยังไม่ได้สร้าง schema หรือ entity

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: '111',
      },
      {
        userId: 2,
        username: 'maria',
        password: '222',
      },
    ];
  }

  //   async findOne(username: string): Promise<User | undefined> {
  //     return this.users.find(user => user.username === username);
  //   }

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
