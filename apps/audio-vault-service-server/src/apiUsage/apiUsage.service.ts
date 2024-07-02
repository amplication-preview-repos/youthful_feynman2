import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiUsageServiceBase } from "./base/apiUsage.service.base";

@Injectable()
export class ApiUsageService extends ApiUsageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
