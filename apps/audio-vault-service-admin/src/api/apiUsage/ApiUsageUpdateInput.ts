import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";

export type ApiUsageUpdateInput = {
  developer?: DeveloperWhereUniqueInput | null;
  endpoint?: string | null;
  requestTimestamp?: Date | null;
  responseStatus?: string | null;
};
