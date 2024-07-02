import { SortOrder } from "../../util/SortOrder";

export type MusicTrackOrderByInput = {
  artist?: SortOrder;
  createdAt?: SortOrder;
  externalCatalogId?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  metadata?: SortOrder;
  mood?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
