import { Injectable } from '@nestjs/common';

@Injectable()
export class EligibilityService {
  check(data: any) {
    // Placeholder logic
    const isEligible = data?.age >= 18; // Example condition
    return {
      eligible: isEligible,
      message: isEligible ? 'Approved' : 'Not eligible',
    };
  }
}
