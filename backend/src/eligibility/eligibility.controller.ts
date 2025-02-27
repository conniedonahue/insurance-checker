import { Controller, Post, Body } from '@nestjs/common';
import { EligibilityService } from './eligibility.service';

@Controller('eligibility')
export class EligibilityController {
  constructor(private readonly eligibilityService: EligibilityService) {}

  @Post()
  checkEligibility(@Body() data: any) {
    return this.eligibilityService.check(data);
  }
}
