import { ApiUsage } from "../apiUsage/ApiUsage";
import { LicenseAgreement } from "../licenseAgreement/LicenseAgreement";

export type Developer = {
  apiKey: string | null;
  apiUsages?: Array<ApiUsage>;
  createdAt: Date;
  email: string | null;
  id: string;
  licenseAgreements?: Array<LicenseAgreement>;
  name: string | null;
  subscriptionPlan: string | null;
  updatedAt: Date;
};
