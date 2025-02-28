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

  constructor(data: Partial<GetEligibilityDTO>) {
    this.payerCode = data.payerCode;
    this.payerName = data.payerName || '';
    this.provider = data.provider;
    this.subscriber = data.subscriber;
    this.dependent = data.dependent || undefined;
    this.isSubscriberPatient = data.isSubscriberPatient;
    this.doS_StartDate = data.doS_StartDate;
    this.doS_EndDate = data.doS_EndDate;
    this.serviceCodes = data.serviceCodes;
    this.isHMOPlan = data.isHMOPlan ?? true;
    this.includeTextResponse = data.includeTextResponse ?? true;
    this.referenceId = data.referenceId;
    this.location = data.location;
    this.internalId = data.internalId || '';
    this.customerId = data.customerId || '';

    this.validate(); // Include business logic such as validation
  }

  private validate() {
    if (!this.payerCode) throw new Error('Payer Code is required');
    if (!this.subscriber.lastName)
      throw new Error('Subscriber Last Name is required');
    // Additional validation logic
  }
}
