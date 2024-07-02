import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentPublisherServiceBase } from "./base/contentPublisher.service.base";

@Injectable()
export class ContentPublisherService extends ContentPublisherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
