import { MusicTrackWhereInput } from "./MusicTrackWhereInput";
import { MusicTrackOrderByInput } from "./MusicTrackOrderByInput";

export type MusicTrackFindManyArgs = {
  where?: MusicTrackWhereInput;
  orderBy?: Array<MusicTrackOrderByInput>;
  skip?: number;
  take?: number;
};
