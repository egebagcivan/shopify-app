import { Card, Layout, Page } from '@shopify/polaris';
import React from 'react';
import ProductList from '../components/ProductList';

class Products extends React.Component {
  state = {
    items: []
  };
  componentDidMount() {
    fetch('/getProducts')
      .then((response) => response.json())
      .then((items) => {
        this.setState({ items: items.products });
      });
  }

  render() {
    let products = this.state.items;

    return (
      <Page>
        <Layout.AnnotatedSection
          title="Products"
          description="Add products to your store.">
          <ProductList products={products} />
        </Layout.AnnotatedSection>
      </Page>
    );
  }
}

export default Products;