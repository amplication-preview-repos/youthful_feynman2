import { InputJsonValue } from "../../types";

export type MusicTrackCreateInput = {
  artist?: string | null;
  externalCatalogId?: string | null;
  genre?: string | null;
  metadata?: InputJsonValue;
  mood?: string | null;
  title?: string | null;
};
