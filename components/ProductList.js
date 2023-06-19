import { Card, ResourceList, ResourceItem, TextStyle, Thumbnail } from "@shopify/polaris";
import React from "react";
import { Markup } from "interweave";

const ProductList = (props) => {
  const { products } = props;

  const hadnleClick = (id) => {
    console.log(id);
  }

  if (!products || products.lenght === 0) {
    return <Card sectioned>
      <p>No Products Available</p>
    </Card>;
  }
  return (
    <Card>
      <ResourceList
        resourceName={{ singular: 'product', plural: 'products' }}
        items={products}
        renderItem={(product) => {
          const url = product.image.src;
          const { id, title, body_html } = product;
          const media = <Thumbnail source={url} alt={title} />;

          return (
            <ResourceItem
              id={id}
              media={media}
              accessibilityLabel={`View details for ${title}`}
              onClick={hadnleClick}
            >
              <TextStyle variant="bodyMd" fontWeight="bold" as="h3">
                {title}
              </TextStyle>
              <div><Markup content={body_html}></Markup></div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}

export default ProductList;