import { Module } from "@nestjs/common";
import { LicenseAgreementModuleBase } from "./base/licenseAgreement.module.base";
import { LicenseAgreementService } from "./licenseAgreement.service";
import { LicenseAgreementController } from "./licenseAgreement.controller";
import { LicenseAgreementResolver } from "./licenseAgreement.resolver";

@Module({
  imports: [LicenseAgreementModuleBase],
  controllers: [LicenseAgreementController],
  providers: [LicenseAgreementService, LicenseAgreementResolver],
  exports: [LicenseAgreementService],
})
export class LicenseAgreementModule {}
