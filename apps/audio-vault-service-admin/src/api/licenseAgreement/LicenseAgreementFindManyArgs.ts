import { LicenseAgreementWhereInput } from "./LicenseAgreementWhereInput";
import { LicenseAgreementOrderByInput } from "./LicenseAgreementOrderByInput";

export type LicenseAgreementFindManyArgs = {
  where?: LicenseAgreementWhereInput;
  orderBy?: Array<LicenseAgreementOrderByInput>;
  skip?: number;
  take?: number;
};
