import { ApiUsageCreateNestedManyWithoutDevelopersInput } from "./ApiUsageCreateNestedManyWithoutDevelopersInput";
import { LicenseAgreementCreateNestedManyWithoutDevelopersInput } from "./LicenseAgreementCreateNestedManyWithoutDevelopersInput";

export type DeveloperCreateInput = {
  apiKey?: string | null;
  apiUsages?: ApiUsageCreateNestedManyWithoutDevelopersInput;
  email?: string | null;
  licenseAgreements?: LicenseAgreementCreateNestedManyWithoutDevelopersInput;
  name?: string | null;
  subscriptionPlan?: string | null;
};
