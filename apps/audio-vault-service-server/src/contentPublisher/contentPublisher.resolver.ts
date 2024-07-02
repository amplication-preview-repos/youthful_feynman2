import * as graphql from "@nestjs/graphql";
import { ContentPublisherResolverBase } from "./base/contentPublisher.resolver.base";
import { ContentPublisher } from "./base/ContentPublisher";
import { ContentPublisherService } from "./contentPublisher.service";

@graphql.Resolver(() => ContentPublisher)
export class ContentPublisherResolver extends ContentPublisherResolverBase {
  constructor(protected readonly service: ContentPublisherService) {
    super(service);
  }
}
