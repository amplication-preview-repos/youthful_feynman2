import { ContentPublisher as TContentPublisher } from "../api/contentPublisher/ContentPublisher";

export const CONTENTPUBLISHER_TITLE_FIELD = "name";

export const ContentPublisherTitle = (record: TContentPublisher): string => {
  return record.name?.toString() || String(record.id);
};
