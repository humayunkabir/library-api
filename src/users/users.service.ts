import { Injectable } from '@nestjs/common'
import { User } from './interfaces/user'

@Injectable()
export class UsersService {
  private readonly users: User[]

  constructor() {
    this.users = [
      {
        id: '0',
        name: 'Humayun Kabir',
        username: 'humayunkabir',
        password: 'pass',
      },
      {
        id: '1',
        name: 'John Doe',
        username: 'john',
        password: 'changeme',
      },
      {
        id: '2',
        name: 'Chirs Martin',
        username: 'chris',
        password: 'secret',
      },
      {
        id: '3',
        name: 'Maria Jane',
        username: 'maria',
        password: 'guess',
      },
    ]
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }

  findAll = async (): Promise<User[]> => this.users

  find = async (id: string): Promise<User | undefined> =>
    this.users.find(user => user.id === id)

  findMany = async (ids): Promise<User[]> =>
    Promise.all(ids.map(id => this.find(id)).filter(user => user))
}
