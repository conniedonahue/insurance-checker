import { Controller, Post, Body, Headers } from '@nestjs/common';
import { EligibilityService } from './eligibility.service';
import { GetEligibilityDTO } from './eligibility.get-eligibility.dto';

@Controller('eligibility')
export class EligibilityController {
  constructor(private readonly eligibilityService: EligibilityService) {}

  @Post()
  checkEligibility(
    @Body() data: GetEligibilityDTO,
    @Headers('authorization') authorization: string,
    @Headers('client-api-id') clientApiId: string,
  ) {
    return this.eligibilityService.check(authorization, clientApiId, data);
  }
}
