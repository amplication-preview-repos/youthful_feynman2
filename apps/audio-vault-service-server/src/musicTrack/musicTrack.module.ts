import { Module } from "@nestjs/common";
import { MusicTrackModuleBase } from "./base/musicTrack.module.base";
import { MusicTrackService } from "./musicTrack.service";
import { MusicTrackController } from "./musicTrack.controller";
import { MusicTrackResolver } from "./musicTrack.resolver";

@Module({
  imports: [MusicTrackModuleBase],
  controllers: [MusicTrackController],
  providers: [MusicTrackService, MusicTrackResolver],
  exports: [MusicTrackService],
})
export class MusicTrackModule {}
