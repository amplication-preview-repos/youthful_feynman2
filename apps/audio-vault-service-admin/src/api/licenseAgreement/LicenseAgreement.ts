import { Developer } from "../developer/Developer";

export type LicenseAgreement = {
  createdAt: Date;
  developer?: Developer | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  terms: string | null;
  track: string | null;
  updatedAt: Date;
};
