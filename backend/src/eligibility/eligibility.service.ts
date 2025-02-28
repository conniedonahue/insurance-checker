import { Injectable } from '@nestjs/common';
import { GetEligibilityDTO } from './eligibility.get-eligibility.dto';
import { EligibilityRequest } from './eligibility-request.interface';

@Injectable()
export class EligibilityService {
  check(authorization: string, clientApiId: string, data: GetEligibilityDTO) {
    const eligibilityRequest = this.mapDataToEligibilityRequest(data);

    // MOCK RESPONSE: Checks to see if user is a Gemini, if so: DENIED
    const isEligible = this.isAGemini(data.subscriber?.dob ?? '');

    return {
      eligible: isEligible,
      message: isEligible ? 'Approved' : 'Not eligible',
      details: eligibilityRequest,
    };
  }

  private mapDataToEligibilityRequest(
    data: GetEligibilityDTO,
  ): EligibilityRequest {
    return {
      payerCode: data.payerCode,
      payerName: data.payerName,
      provider: data.provider,
      subscriber: data.subscriber,
      dependent: data.dependent,
      isSubscriberPatient: data.isSubscriberPatient,
      doS_StartDate: data.doS_StartDate,
      doS_EndDate: data.doS_EndDate,
      serviceCodes: data.serviceCodes,
      isHMOPlan: data.isHMOPlan ?? true,
      includeTextResponse: data.includeTextResponse ?? true,
      referenceId: data.referenceId,
      location: data.location,
      internalId: data.internalId || '',
      customerId: data.customerId || '',
    };
  }

  private isAGemini(dob: string): boolean {
    if (!dob) {
      return false;
    }
    const [month, day, ,] = dob.split('/').map((str) => Number(str));
    if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
      return true;
    }
    return false;
  }
}
