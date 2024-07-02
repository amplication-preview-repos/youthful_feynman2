import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DEVELOPER_TITLE_FIELD } from "../developer/DeveloperTitle";

export const ApiUsageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
