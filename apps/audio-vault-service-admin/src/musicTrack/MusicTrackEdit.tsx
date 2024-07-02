import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MusicTrackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="artist" source="artist" />
        <TextInput label="externalCatalogId" source="externalCatalogId" />
        <TextInput label="genre" source="genre" />
        <div />
        <TextInput label="mood" source="mood" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
