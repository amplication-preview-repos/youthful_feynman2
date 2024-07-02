import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { DeveloperTitle } from "../developer/DeveloperTitle";

export const ApiUsageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="developer.id"
          reference="Developer"
          label="developer"
        >
          <SelectInput optionText={DeveloperTitle} />
        </ReferenceInput>
        <TextInput label="endpoint" source="endpoint" />
        <DateTimeInput label="requestTimestamp" source="requestTimestamp" />
        <TextInput label="responseStatus" source="responseStatus" />
      </SimpleForm>
    </Create>
  );
};
