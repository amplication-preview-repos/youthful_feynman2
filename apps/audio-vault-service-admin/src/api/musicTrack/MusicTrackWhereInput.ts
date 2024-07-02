import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MusicTrackWhereInput = {
  artist?: StringNullableFilter;
  externalCatalogId?: StringNullableFilter;
  genre?: StringNullableFilter;
  id?: StringFilter;
  metadata?: JsonFilter;
  mood?: StringNullableFilter;
  title?: StringNullableFilter;
};
