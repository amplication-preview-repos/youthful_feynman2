import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MusicTrackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Music Tracks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="artist" source="artist" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="externalCatalogId" source="externalCatalogId" />
        <TextField label="genre" source="genre" />
        <TextField label="ID" source="id" />
        <TextField label="metadata" source="metadata" />
        <TextField label="mood" source="mood" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
