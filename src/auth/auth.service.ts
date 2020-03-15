import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username)
    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user
      return result
    }
    return null
  }

  async loginWithToken(accessToken: string) {
    const user = this.jwtService.decode(accessToken)
    // const { password, ...processedUser } = await this.usersService.findOne(
    //   user.username,
    // )
    return user
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id }
    const { password, ...processedUser } = await this.usersService.findOne(
      payload.username,
    )
    return {
      ...processedUser,
      accessToken: this.jwtService.sign(payload),
    }
  }
}
