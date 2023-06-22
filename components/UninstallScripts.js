import { Banner, Button, TextField, FormLayout, Form } from "@shopify/polaris";
import React, { useState } from "react";

const UninstallScripts = () => {
  const [active, setActive] = useState(false);
  const [id, setId] = useState('');

  const handleSubmit = (_event) => {
    fetch(`/uninstallScriptTag?id=${id}`)
      .then((scripttag) => {
        setActive(true);
        setId('')
      });
  };
  const handleScriptTagID = (value) => setId(value);

  if (active) {
    return (
      <Banner
        title="The script was uninstalled successfully."
        status="success"
      />
    )
  } else {

    return (
      <Form onSubmit={handleSubmit}>
        <FormLayout>
          <TextField
            value={id}
            onChange={handleScriptTagID}
            label="Script tag ID"
            type="number"
          />
          <Button submit>Submit</Button>
        </FormLayout>
      </Form>
    )
  }
}
export default UninstallScripts;