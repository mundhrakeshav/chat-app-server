import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { Services } from 'src/utils/constants';

@Module({
  providers: [
    {
      provide: Services.USER,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: Services.USER,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
