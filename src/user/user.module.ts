import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { AuthModule } from 'src/auth/auth.module'
import { UsersService } from 'src/users/users.service'

@Module({
  controllers: [UserController],
  providers: [UserService, UsersService],
  imports: [AuthModule],
})
export class UserModule {}
