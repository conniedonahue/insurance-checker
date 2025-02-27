import { Injectable } from '@nestjs/common';
import { EligibilityInquiryRequest } from './eligibility-request.interface';

@Injectable()
export class EligibilityService {
  check(
    authorization: string,
    clientApiId: string,
    data: EligibilityInquiryRequest,
  ) {
    const eligibilityInquiryRequest = {
      payerCode: '00007',
      provider: {
        firstName: data.provider?.firstName || '',
        middleName: data.provider?.middleName || '',
        lastName: data.provider?.lastName || 'test name',
        npi: data.provider?.npi || '1122334455',
        pin: data.provider?.pin || '00000',
      },
      subscriber: {
        firstName: data.subscriber?.firstName || 'first',
        middleName: data.subscriber?.middleName || '',
        lastName: data.subscriber?.lastName || 'somelast',
        dob: data.subscriber?.dob || '12/21/2018',
        memberId: data.subscriber?.memberId || '1234567890',
      },
      dependent: {
        patient: {
          firstName: data.dependent?.patient?.firstName || '',
          middleName: data.dependent?.patient?.middleName || '',
          lastName: data.dependent?.patient?.lastName || '',
          dob: data.dependent?.patient?.dob || '',
          gender: data.dependent?.patient?.gender || '',
        },
        relationWithSubscriber: data.dependent?.relationWithSubscriber || '',
      },
      isSubscriberPatient: data.isSubscriberPatient || 'true',
      doS_StartDate: data.doS_StartDate || '12/21/2018',
      doS_EndDate: data.doS_EndDate || '12/21/2018',
      serviceCodes: data.serviceCodes || ['30'], // Default to service code "30"
      isHMOPlan: data.isHMOPlan || true,
      includeTextResponse: data.includeTextResponse || true,
      referenceId: data.referenceId || '1234',
      location: data.location || 'Nowhere',
      internalId: data.internalId || '',
      customerId: data.customerId || '',
    };

    // Mock response:
    // Checks to see if user is a Gemini, if so: DENIED
    const isEligible = isAGemini(data.subscriber?.dob ?? ''); // Example check
    return {
      eligible: isEligible,
      message: isEligible ? 'Approved' : 'Not eligible',
      details: eligibilityInquiryRequest,
    };
  }
}

function isAGemini(dob: string): boolean {
  if (!dob) {
    return false;
  }
  const [month, day, ,] = dob.split('/').map((str) => Number(str));
  if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
    return true;
  }
  return false;
}
