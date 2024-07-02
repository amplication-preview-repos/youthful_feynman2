import { DeveloperWhereInput } from "./DeveloperWhereInput";
import { DeveloperOrderByInput } from "./DeveloperOrderByInput";

export type DeveloperFindManyArgs = {
  where?: DeveloperWhereInput;
  orderBy?: Array<DeveloperOrderByInput>;
  skip?: number;
  take?: number;
};
