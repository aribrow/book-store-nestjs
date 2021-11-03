import { Module } from '@nestjs/common';
import { MapperService } from './mapper.service';

@Module({
  exports: [MapperService],
  controllers: [],
  providers: [MapperService],
})
export class SharedModule {}
