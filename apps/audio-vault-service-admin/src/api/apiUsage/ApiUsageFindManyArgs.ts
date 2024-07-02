import { ApiUsageWhereInput } from "./ApiUsageWhereInput";
import { ApiUsageOrderByInput } from "./ApiUsageOrderByInput";

export type ApiUsageFindManyArgs = {
  where?: ApiUsageWhereInput;
  orderBy?: Array<ApiUsageOrderByInput>;
  skip?: number;
  take?: number;
};
