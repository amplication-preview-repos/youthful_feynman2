import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MusicTrackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="artist" source="artist" />
        <TextInput label="externalCatalogId" source="externalCatalogId" />
        <TextInput label="genre" source="genre" />
        <div />
        <TextInput label="mood" source="mood" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
