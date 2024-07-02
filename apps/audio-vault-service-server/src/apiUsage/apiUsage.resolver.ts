import * as graphql from "@nestjs/graphql";
import { ApiUsageResolverBase } from "./base/apiUsage.resolver.base";
import { ApiUsage } from "./base/ApiUsage";
import { ApiUsageService } from "./apiUsage.service";

@graphql.Resolver(() => ApiUsage)
export class ApiUsageResolver extends ApiUsageResolverBase {
  constructor(protected readonly service: ApiUsageService) {
    super(service);
  }
}
