import * as graphql from "@nestjs/graphql";
import { MusicTrackResolverBase } from "./base/musicTrack.resolver.base";
import { MusicTrack } from "./base/MusicTrack";
import { MusicTrackService } from "./musicTrack.service";

@graphql.Resolver(() => MusicTrack)
export class MusicTrackResolver extends MusicTrackResolverBase {
  constructor(protected readonly service: MusicTrackService) {
    super(service);
  }
}
