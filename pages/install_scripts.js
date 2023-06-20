import React from "react";
import { Layout, Page } from '@shopify/polaris';

class ScriptTags extends React.Component {
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="Install Scripts"
          description="Install Scripts by Clicking the button">
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default ScriptTags;