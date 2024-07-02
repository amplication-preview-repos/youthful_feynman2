import * as graphql from "@nestjs/graphql";
import { LicenseAgreementResolverBase } from "./base/licenseAgreement.resolver.base";
import { LicenseAgreement } from "./base/LicenseAgreement";
import { LicenseAgreementService } from "./licenseAgreement.service";

@graphql.Resolver(() => LicenseAgreement)
export class LicenseAgreementResolver extends LicenseAgreementResolverBase {
  constructor(protected readonly service: LicenseAgreementService) {
    super(service);
  }
}
