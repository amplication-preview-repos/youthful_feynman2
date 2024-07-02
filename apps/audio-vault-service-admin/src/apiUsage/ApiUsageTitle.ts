import { ApiUsage as TApiUsage } from "../api/apiUsage/ApiUsage";

export const APIUSAGE_TITLE_FIELD = "endpoint";

export const ApiUsageTitle = (record: TApiUsage): string => {
  return record.endpoint?.toString() || String(record.id);
};
