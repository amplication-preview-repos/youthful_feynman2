import { Developer as TDeveloper } from "../api/developer/Developer";

export const DEVELOPER_TITLE_FIELD = "name";

export const DeveloperTitle = (record: TDeveloper): string => {
  return record.name?.toString() || String(record.id);
};
