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

export const ApiUsageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"API Usages"}
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
        <TextField label="endpoint" source="endpoint" />
        <TextField label="ID" source="id" />
        <TextField label="requestTimestamp" source="requestTimestamp" />
        <TextField label="responseStatus" source="responseStatus" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
