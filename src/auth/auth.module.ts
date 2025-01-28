// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { JwtModule } from '@nestjs/jwt';
// import { UserModule } from 'src/user/user.module';
// import { JwtStrategy } from './jwt.strategy';

// @Module({
//   imports: [
//     UserModule,
//     JwtModule.register({
//       secret: process.env.JWT_SECRET || 'your_secret_key',
//       signOptions: { expiresIn: '1h' }, // token expires in 1 hour
//     }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   controllers: [AuthController],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'your_jwt_secret_key',
      signOptions: { expiresIn: '8h' },
    }),
    UserModule,
  ],
  // providers: [AuthService, JwtStrategy],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
