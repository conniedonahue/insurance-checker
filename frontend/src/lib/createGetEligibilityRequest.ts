import { GetEligibilityRequest } from "../../types/GetEligibility";

export function createGetEligibilityRequest(formData: {
  firstName: string;
  lastName: string;
  dob: string;
  healthPlan: string;
}): GetEligibilityRequest {
  return {
    payerCode: "FAKE123",
    payerName: "Demo Health Insurance",
    provider: {
      lastName: "Apple",
      npi: "FAKENPI",
      firstName: "Doctor",
    },
    subscriber: {
      lastName: formData.lastName,
      firstName: "John",
      dob: "1990-01-01",
    },
    isSubscriberPatient: "true",
    doS_StartDate: new Date().toISOString().split("T")[0], // Today
    doS_EndDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
      .toISOString()
      .split("T")[0], // +1 year
    serviceCodes: ["12345", "67890"],
    referenceId: "REF123456",
    location: "Demo Location",
  };
}
