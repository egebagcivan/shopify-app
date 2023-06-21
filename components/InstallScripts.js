import { Banner, SettingToggle, TextStyle } from "@shopify/polaris";
import React, { useState } from "react";

const InstallScripts = () => {
  const [active, setActive] = React.useState(false);
  const handleToggle = () => {
    fetch('/installScriptTags').then(response => { console.log(response); setActive((active) => !active); })
  }
  const contentStatus = active ? 'Uninstall' : 'Install';
  const textStatus = active ? 'Installed' : 'Not Installed';

  if (active) {
    return (
      <Banner
        title="The script was installed successfully."
        status="success"
      />
    )
  } else {

    return (
      <>
        <SettingToggle
          action={{
            content: contentStatus,
            onAction: handleToggle,
          }}
          enabled={active}
        >
          The script <TextStyle variation="strong">{textStatus}</TextStyle>.
        </SettingToggle>
      </>
    )
  }
}
export default InstallScripts;