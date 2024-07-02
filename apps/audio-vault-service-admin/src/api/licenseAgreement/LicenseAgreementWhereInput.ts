import { DeveloperWhereUniqueInput } from "../developer/DeveloperWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LicenseAgreementWhereInput = {
  developer?: DeveloperWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  terms?: StringNullableFilter;
  track?: StringNullableFilter;
};
