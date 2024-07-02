import { SortOrder } from "../../util/SortOrder";

export type ApiUsageOrderByInput = {
  createdAt?: SortOrder;
  developerId?: SortOrder;
  endpoint?: SortOrder;
  id?: SortOrder;
  requestTimestamp?: SortOrder;
  responseStatus?: SortOrder;
  updatedAt?: SortOrder;
};
