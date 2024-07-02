import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeveloperServiceBase } from "./base/developer.service.base";

@Injectable()
export class DeveloperService extends DeveloperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
