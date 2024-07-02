import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ApiUsageTitle } from "../apiUsage/ApiUsageTitle";
import { LicenseAgreementTitle } from "../licenseAgreement/LicenseAgreementTitle";

export const DeveloperEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apiKey" source="apiKey" />
        <ReferenceArrayInput
          source="apiUsages"
          reference="ApiUsage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApiUsageTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="licenseAgreements"
          reference="LicenseAgreement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LicenseAgreementTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="subscriptionPlan" source="subscriptionPlan" />
      </SimpleForm>
    </Edit>
  );
};
