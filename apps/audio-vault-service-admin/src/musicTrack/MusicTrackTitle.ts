import { MusicTrack as TMusicTrack } from "../api/musicTrack/MusicTrack";

export const MUSICTRACK_TITLE_FIELD = "title";

export const MusicTrackTitle = (record: TMusicTrack): string => {
  return record.title?.toString() || String(record.id);
};
