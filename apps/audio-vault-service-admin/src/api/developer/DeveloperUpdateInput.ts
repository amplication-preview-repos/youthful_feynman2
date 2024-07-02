import { ApiUsageUpdateManyWithoutDevelopersInput } from "./ApiUsageUpdateManyWithoutDevelopersInput";
import { LicenseAgreementUpdateManyWithoutDevelopersInput } from "./LicenseAgreementUpdateManyWithoutDevelopersInput";

export type DeveloperUpdateInput = {
  apiKey?: string | null;
  apiUsages?: ApiUsageUpdateManyWithoutDevelopersInput;
  email?: string | null;
  licenseAgreements?: LicenseAgreementUpdateManyWithoutDevelopersInput;
  name?: string | null;
  subscriptionPlan?: string | null;
};
