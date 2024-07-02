import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ApiUsageWhereInput = {
  developer?: DeveloperWhereUniqueInput;
  endpoint?: StringNullableFilter;
  id?: StringFilter;
  requestTimestamp?: DateTimeNullableFilter;
  responseStatus?: StringNullableFilter;
};
