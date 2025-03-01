export interface GetEligibilityRequest {
    payerCode: string;
    payerName?: string;
    provider: { firstName?: string; lastName: string; npi: string };
    subscriber: { firstName: string; lastName: string; dob?: string };
    isSubscriberPatient: string;
    doS_StartDate: string;
    doS_EndDate: string;
    serviceCodes: string[];
    referenceId: string;
    location: string;
  }

export interface GetEligibilityResponse {
    eligible: boolean;
    message: string;
  }