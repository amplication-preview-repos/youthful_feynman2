import { ContentPublisherWhereInput } from "./ContentPublisherWhereInput";
import { ContentPublisherOrderByInput } from "./ContentPublisherOrderByInput";

export type ContentPublisherFindManyArgs = {
  where?: ContentPublisherWhereInput;
  orderBy?: Array<ContentPublisherOrderByInput>;
  skip?: number;
  take?: number;
};
