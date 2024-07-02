import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ApiUsageListRelationFilter } from "../apiUsage/ApiUsageListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LicenseAgreementListRelationFilter } from "../licenseAgreement/LicenseAgreementListRelationFilter";

export type DeveloperWhereInput = {
  apiKey?: StringNullableFilter;
  apiUsages?: ApiUsageListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  licenseAgreements?: LicenseAgreementListRelationFilter;
  name?: StringNullableFilter;
  subscriptionPlan?: StringNullableFilter;
};
