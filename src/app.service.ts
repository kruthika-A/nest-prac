import { Body, Injectable, Post } from '@nestjs/common';

@Injectable()
export class AppService {
  usersService: any;
  postHello(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    let query='select * from market'
    console.log('aaaaaaaaaaaaaaaaaaaaaaaa',query)
    return 'Hello World!';
  }
  }



