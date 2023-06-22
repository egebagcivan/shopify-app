import React from "react";
import { Layout, Page } from '@shopify/polaris';
import InstallScripts from "../components/InstallScripts";
import UninstallScripts from "../components/UninstallScripts";

class ScriptTags extends React.Component {
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="Install Scripts"
          description="Install Scripts by Clicking the button">
          <InstallScripts />
        </Layout.AnnotatedSection>
        <Layout.AnnotatedSection
          title="Uninstall Scripts"
          description="Uninstall Scripts by Clicking the button">
          <UninstallScripts />
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default ScriptTags;