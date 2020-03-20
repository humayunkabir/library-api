import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { UserService } from './user/user.service'
import { UserController } from './user/user.controller'
import { UserModule } from './user/user.module'

@Module({
  imports: [AuthModule, UsersModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
