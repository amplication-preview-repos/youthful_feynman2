import { Module } from "@nestjs/common";
import { ContentPublisherModuleBase } from "./base/contentPublisher.module.base";
import { ContentPublisherService } from "./contentPublisher.service";
import { ContentPublisherController } from "./contentPublisher.controller";
import { ContentPublisherResolver } from "./contentPublisher.resolver";

@Module({
  imports: [ContentPublisherModuleBase],
  controllers: [ContentPublisherController],
  providers: [ContentPublisherService, ContentPublisherResolver],
  exports: [ContentPublisherService],
})
export class ContentPublisherModule {}
