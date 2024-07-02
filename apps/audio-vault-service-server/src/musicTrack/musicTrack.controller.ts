import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MusicTrackService } from "./musicTrack.service";
import { MusicTrackControllerBase } from "./base/musicTrack.controller.base";

@swagger.ApiTags("musicTracks")
@common.Controller("musicTracks")
export class MusicTrackController extends MusicTrackControllerBase {
  constructor(protected readonly service: MusicTrackService) {
    super(service);
  }
}
