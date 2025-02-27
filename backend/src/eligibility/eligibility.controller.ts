import { Controller, Post, Body, Headers } from '@nestjs/common';
import { EligibilityService } from './eligibility.service';

@Controller('eligibility')
export class EligibilityController {
  constructor(private readonly eligibilityService: EligibilityService) {}

  @Post()
  checkEligibility(
    @Body() data: any,
    @Headers('authorization') authorization: string,
    @Headers('client-api-id') clientApiId: string,
  ) {
    return this.eligibilityService.check(authorization, clientApiId, data);
  }
}
