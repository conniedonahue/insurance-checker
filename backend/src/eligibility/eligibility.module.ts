import { Module } from '@nestjs/common';
import { EligibilityService } from './eligibility.service';
import { EligibilityController } from './eligibility.controller';

@Module({
  providers: [EligibilityService],
  controllers: [EligibilityController],
})
export class EligibilityModule {}
