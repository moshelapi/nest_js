import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ffd world!';
  }
  getMessi(): string {
    return 'Messi';
  }
}
