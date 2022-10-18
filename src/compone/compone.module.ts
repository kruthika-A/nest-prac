import { Module } from '@nestjs/common';
import { ComponeService } from './compone.service';
import { ComponeController } from './compone.controller';

@Module({
  controllers: [ComponeController],
  providers: [ComponeService]
})
export class ComponeModule {}
