import React from "react";
import { Layout, Page } from '@shopify/polaris';
import InstallScripts from "../components/InstallScripts";

class ScriptTags extends React.Component {
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="Install Scripts"
          description="Install Scripts by Clicking the button">
          <InstallScripts />
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default ScriptTags;