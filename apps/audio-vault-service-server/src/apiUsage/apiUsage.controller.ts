import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApiUsageService } from "./apiUsage.service";
import { ApiUsageControllerBase } from "./base/apiUsage.controller.base";

@swagger.ApiTags("apiUsages")
@common.Controller("apiUsages")
export class ApiUsageController extends ApiUsageControllerBase {
  constructor(protected readonly service: ApiUsageService) {
    super(service);
  }
}
