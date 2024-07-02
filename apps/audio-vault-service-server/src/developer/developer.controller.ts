import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeveloperService } from "./developer.service";
import { DeveloperControllerBase } from "./base/developer.controller.base";

@swagger.ApiTags("developers")
@common.Controller("developers")
export class DeveloperController extends DeveloperControllerBase {
  constructor(protected readonly service: DeveloperService) {
    super(service);
  }
}
