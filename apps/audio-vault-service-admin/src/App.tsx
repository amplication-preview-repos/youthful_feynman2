import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LicenseAgreementList } from "./licenseAgreement/LicenseAgreementList";
import { LicenseAgreementCreate } from "./licenseAgreement/LicenseAgreementCreate";
import { LicenseAgreementEdit } from "./licenseAgreement/LicenseAgreementEdit";
import { LicenseAgreementShow } from "./licenseAgreement/LicenseAgreementShow";
import { MusicTrackList } from "./musicTrack/MusicTrackList";
import { MusicTrackCreate } from "./musicTrack/MusicTrackCreate";
import { MusicTrackEdit } from "./musicTrack/MusicTrackEdit";
import { MusicTrackShow } from "./musicTrack/MusicTrackShow";
import { ContentPublisherList } from "./contentPublisher/ContentPublisherList";
import { ContentPublisherCreate } from "./contentPublisher/ContentPublisherCreate";
import { ContentPublisherEdit } from "./contentPublisher/ContentPublisherEdit";
import { ContentPublisherShow } from "./contentPublisher/ContentPublisherShow";
import { ApiUsageList } from "./apiUsage/ApiUsageList";
import { ApiUsageCreate } from "./apiUsage/ApiUsageCreate";
import { ApiUsageEdit } from "./apiUsage/ApiUsageEdit";
import { ApiUsageShow } from "./apiUsage/ApiUsageShow";
import { DeveloperList } from "./developer/DeveloperList";
import { DeveloperCreate } from "./developer/DeveloperCreate";
import { DeveloperEdit } from "./developer/DeveloperEdit";
import { DeveloperShow } from "./developer/DeveloperShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AudioVaultService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LicenseAgreement"
          list={LicenseAgreementList}
          edit={LicenseAgreementEdit}
          create={LicenseAgreementCreate}
          show={LicenseAgreementShow}
        />
        <Resource
          name="MusicTrack"
          list={MusicTrackList}
          edit={MusicTrackEdit}
          create={MusicTrackCreate}
          show={MusicTrackShow}
        />
        <Resource
          name="ContentPublisher"
          list={ContentPublisherList}
          edit={ContentPublisherEdit}
          create={ContentPublisherCreate}
          show={ContentPublisherShow}
        />
        <Resource
          name="ApiUsage"
          list={ApiUsageList}
          edit={ApiUsageEdit}
          create={ApiUsageCreate}
          show={ApiUsageShow}
        />
        <Resource
          name="Developer"
          list={DeveloperList}
          edit={DeveloperEdit}
          create={DeveloperCreate}
          show={DeveloperShow}
        />
      </Admin>
    </div>
  );
};

export default App;
