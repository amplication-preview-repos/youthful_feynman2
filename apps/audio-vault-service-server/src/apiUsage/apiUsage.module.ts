import { Module } from "@nestjs/common";
import { ApiUsageModuleBase } from "./base/apiUsage.module.base";
import { ApiUsageService } from "./apiUsage.service";
import { ApiUsageController } from "./apiUsage.controller";
import { ApiUsageResolver } from "./apiUsage.resolver";

@Module({
  imports: [ApiUsageModuleBase],
  controllers: [ApiUsageController],
  providers: [ApiUsageService, ApiUsageResolver],
  exports: [ApiUsageService],
})
export class ApiUsageModule {}
