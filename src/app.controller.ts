import { Bind, Controller, Get,HostParam,HttpCode, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ host: 'localhost' })
export class AppController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}

