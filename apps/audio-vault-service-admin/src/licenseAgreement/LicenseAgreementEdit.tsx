import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DeveloperTitle } from "../developer/DeveloperTitle";

export const LicenseAgreementEdit = (props: EditProps): React.ReactElement => {
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
        <DateTimeInput label="endDate" source="endDate" />
        <DateTimeInput label="startDate" source="startDate" />
        <TextInput label="terms" multiline source="terms" />
        <TextInput label="track" source="track" />
      </SimpleForm>
    </Edit>
  );
};
