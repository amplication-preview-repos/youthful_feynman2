import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEVELOPER_TITLE_FIELD } from "./DeveloperTitle";

export const DeveloperShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="apiKey" source="apiKey" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="subscriptionPlan" source="subscriptionPlan" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ApiUsage"
          target="developerId"
          label="API Usages"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="LicenseAgreement"
          target="developerId"
          label="License Agreements"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
