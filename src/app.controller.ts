import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Headers,
} from '@nestjs/common'
import { AppService } from './app.service'
import { AuthService } from './auth/auth.service'
import { LocalAuthGuard } from './auth/gurards/local-auth.guard'
import { JwtAuthGuard } from './auth/gurards/jwt-auth.guard'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  welcome(): object {
    return this.appService.welcome()
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/login/token')
  async loginWithToken(@Headers('authorization') authorization: string) {
    return this.authService.loginWithToken(authorization.split(' ')[1])
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
