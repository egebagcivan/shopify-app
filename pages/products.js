import { Card, Layout, Page } from '@shopify/polaris';
import React from 'react';

class Products extends React.Component {
  render() {
    return (
      <Page>
        <Layout.AnnotatedSection
          title="Products"
          description="Add products to your store.">
          <Card title="Products" sectioned>
            <p>Here you can add products</p>
          </Card>
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default Products;