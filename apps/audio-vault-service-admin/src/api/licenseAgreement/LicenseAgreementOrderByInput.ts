import { SortOrder } from "../../util/SortOrder";

export type LicenseAgreementOrderByInput = {
  createdAt?: SortOrder;
  developerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  terms?: SortOrder;
  track?: SortOrder;
  updatedAt?: SortOrder;
};
