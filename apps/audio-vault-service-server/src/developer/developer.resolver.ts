import * as graphql from "@nestjs/graphql";
import { DeveloperResolverBase } from "./base/developer.resolver.base";
import { Developer } from "./base/Developer";
import { DeveloperService } from "./developer.service";

@graphql.Resolver(() => Developer)
export class DeveloperResolver extends DeveloperResolverBase {
  constructor(protected readonly service: DeveloperService) {
    super(service);
  }
}
