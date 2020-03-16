import { Controller, Get, Query, Post, Body, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { JwtAuthGuard } from '../auth/gurards/jwt-auth.guard'

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  get(@Query('ids') ids: string) {
    return !!ids
      ? this.service.findMany(ids.split(',').filter(id => id))
      : this.service.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  findOne(@Body('username') username: string) {
    return this.service.findOne(username)
  }
}
