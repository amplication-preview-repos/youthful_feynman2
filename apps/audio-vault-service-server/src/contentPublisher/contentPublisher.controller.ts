import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentPublisherService } from "./contentPublisher.service";
import { ContentPublisherControllerBase } from "./base/contentPublisher.controller.base";

@swagger.ApiTags("contentPublishers")
@common.Controller("contentPublishers")
export class ContentPublisherController extends ContentPublisherControllerBase {
  constructor(protected readonly service: ContentPublisherService) {
    super(service);
  }
}
