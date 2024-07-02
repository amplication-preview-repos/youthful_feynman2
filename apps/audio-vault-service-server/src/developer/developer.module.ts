import { Module } from "@nestjs/common";
import { DeveloperModuleBase } from "./base/developer.module.base";
import { DeveloperService } from "./developer.service";
import { DeveloperController } from "./developer.controller";
import { DeveloperResolver } from "./developer.resolver";

@Module({
  imports: [DeveloperModuleBase],
  controllers: [DeveloperController],
  providers: [DeveloperService, DeveloperResolver],
  exports: [DeveloperService],
})
export class DeveloperModule {}
