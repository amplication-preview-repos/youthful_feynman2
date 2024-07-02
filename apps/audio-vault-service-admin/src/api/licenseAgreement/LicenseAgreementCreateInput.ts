import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";

export type LicenseAgreementCreateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  terms?: string | null;
  track?: string | null;
};
