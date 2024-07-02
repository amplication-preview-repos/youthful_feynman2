import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";

export type ApiUsageCreateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  endpoint?: string | null;
  requestTimestamp?: Date | null;
  responseStatus?: string | null;
};
