import { Controller, Inject } from '@nestjs/common';
import { Services } from 'src/utils/types';
import { IAuthService } from './auth';

@Controller('auth')
export class AuthController {
  constructor(@Inject(Services.AUTH) private authService: IAuthService) {}
}
