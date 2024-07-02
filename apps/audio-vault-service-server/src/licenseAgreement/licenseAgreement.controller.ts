import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LicenseAgreementService } from "./licenseAgreement.service";
import { LicenseAgreementControllerBase } from "./base/licenseAgreement.controller.base";

@swagger.ApiTags("licenseAgreements")
@common.Controller("licenseAgreements")
export class LicenseAgreementController extends LicenseAgreementControllerBase {
  constructor(protected readonly service: LicenseAgreementService) {
    super(service);
  }
}
