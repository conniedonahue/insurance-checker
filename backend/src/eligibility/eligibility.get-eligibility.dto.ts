export class GetEligibilityDTO {
  payerCode: string;
  payerName?: string;
  provider: {
    firstName?: string;
    middleName?: string;
    lastName: string;
    npi: string;
    pin?: string;
    taxonomy?: string;
  };
  subscriber: {
    firstName?: string;
    middleName?: string;
    lastName: string;
    dob?: string;
    memberId?: string;
    ssn?: string;
  };
  dependent?: {
    patient: {
      firstName?: string;
      middleName?: string;
      lastName?: string;
      dob?: string;
      gender?: string;
    };
    relationWithSubscriber?: string;
  };
  isSubscriberPatient: string;
  doS_StartDate: string;
  doS_EndDate: string;
  serviceCodes: string[];
  isHMOPlan?: boolean;
  includeTextResponse?: boolean;
  referenceId: string;
  location: string;
  internalId?: string;
  customerId?: string;
}
