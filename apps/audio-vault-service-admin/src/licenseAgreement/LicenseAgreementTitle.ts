import { LicenseAgreement as TLicenseAgreement } from "../api/licenseAgreement/LicenseAgreement";

export const LICENSEAGREEMENT_TITLE_FIELD = "track";

export const LicenseAgreementTitle = (record: TLicenseAgreement): string => {
  return record.track?.toString() || String(record.id);
};
