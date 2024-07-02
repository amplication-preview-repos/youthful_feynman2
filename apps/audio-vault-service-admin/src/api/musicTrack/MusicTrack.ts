import { JsonValue } from "type-fest";

export type MusicTrack = {
  artist: string | null;
  createdAt: Date;
  externalCatalogId: string | null;
  genre: string | null;
  id: string;
  metadata: JsonValue;
  mood: string | null;
  title: string | null;
  updatedAt: Date;
};
