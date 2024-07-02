import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEVELOPER_TITLE_FIELD } from "../developer/DeveloperTitle";

export const LicenseAgreementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"License Agreements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="developer"
          source="developer.id"
          reference="Developer"
        >
          <TextField source={DEVELOPER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="endDate" source="endDate" />
        <TextField label="ID" source="id" />
        <TextField label="startDate" source="startDate" />
        <TextField label="terms" source="terms" />
        <TextField label="track" source="track" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
