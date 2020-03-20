import { Injectable } from '@nestjs/common'
import { User, ProcessedUser } from './interfaces/user'

@Injectable()
export class UsersService {
  private readonly users: User[]

  constructor() {
    this.users = [
      {
        id: '0',
        name: 'Humayun Kabir',
        headline: 'Software Engineer',
        username: 'humayunkabir',
        password: 'pass',
      },
      {
        id: '1',
        name: 'Test User',
        headline: 'Test Engineer',
        username: 'test',
        password: 'test',
      },
      {
        id: '2',
        name: 'John Doe',
        headline: 'Web Desinger',
        username: 'john',
        password: 'changeme',
      },
      {
        id: '3',
        name: 'Chirs Martin',
        headline: 'Graphic Desinger',
        username: 'chris',
        password: 'secret',
      },
      {
        id: '4',
        name: 'Maria Jane',
        headline: 'Web Developer',
        username: 'maria',
        password: 'guess',
      },
    ]
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  processUser = ({ password, ...processedUser }: User): ProcessedUser => {
    return processedUser
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }

  findAll = async (): Promise<ProcessedUser[]> =>
    this.users.map((user: User) => this.processUser(user))

  find = async (id: string): Promise<User | undefined> =>
    this.users.find(user => user.id === id)

  findMany = async (ids: string[]): Promise<User[]> =>
    Promise.all(ids.map((id: string) => this.find(id)).filter(user => user))

  update = async (id: string, newUser: User): Promise<ProcessedUser> => {
    this.users.forEach((user, index) => {
      if (user.id === id) this.users[index] = newUser
    })
    const updatedUser = await this.find(id)
    return this.processUser(updatedUser)
  }
}
