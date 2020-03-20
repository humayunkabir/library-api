import { Injectable } from '@nestjs/common'
import { AuthService } from 'src/auth/auth.service'
import { UsersService } from 'src/users/users.service'
import { User, ProcessedUser } from 'src/users/interfaces/user'

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  find = async (token: string): Promise<User | undefined> => {
    return await this.authService.verify(token)
  }

  updateProfile = async (
    body: object,
    token: string,
  ): Promise<ProcessedUser | undefined> => {
    const user = await this.find(token)
    return this.usersService.update(user.id, { ...user, ...body })
  }
}
