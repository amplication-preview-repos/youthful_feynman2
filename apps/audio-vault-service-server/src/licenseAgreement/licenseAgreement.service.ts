import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LicenseAgreementServiceBase } from "./base/licenseAgreement.service.base";

@Injectable()
export class LicenseAgreementService extends LicenseAgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
