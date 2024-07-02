import { Developer } from "../developer/Developer";

export type ApiUsage = {
  createdAt: Date;
  developer?: Developer | null;
  endpoint: string | null;
  id: string;
  requestTimestamp: Date | null;
  responseStatus: string | null;
  updatedAt: Date;
};
