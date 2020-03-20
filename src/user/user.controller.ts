import {
  Controller,
  UseGuards,
  Get,
  Request,
  Patch,
  Body,
  Headers,
} from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/gurards/jwt-auth.guard'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Headers('authorization') authorization: string) {
    return this.userService.find(authorization.split(' ')[1])
  }

  @UseGuards(JwtAuthGuard)
  @Patch('profile')
  updateProfile(
    @Body() body: object,
    @Headers('authorization') authorization: string,
  ) {
    return this.userService.updateProfile(body, authorization.split(' ')[1])
  }
}
