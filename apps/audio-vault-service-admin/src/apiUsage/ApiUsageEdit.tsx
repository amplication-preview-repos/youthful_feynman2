import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { DeveloperTitle } from "../developer/DeveloperTitle";

export const ApiUsageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
