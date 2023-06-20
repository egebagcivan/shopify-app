import { Card, ResourceList, ResourceItem, TextStyle, Thumbnail, Modal, TextContainer } from "@shopify/polaris";
import React, { useState } from "react";

const ProductList = (props) => {
  const { products } = props;
  const [active, setActive] = useState(false);
  const [pid, setPid] = useState(0);

  const handleChange = () => setActive(!active);
  const deleteTitle = `Delete the product with an ID of: ${pid}`;

  if (!products || products.lenght === 0) {
    return <Card sectioned>
      <p>No Products Available</p>
    </Card>;
  }
  return (
    <>
      <Modal
        open={active}
        onClose={handleChange}
        title={deleteTitle}
        primaryAction={{
          content: 'Delete',
          onAction: () => {
            fetch(`/deleteProduct?id=${pid}`).then(response => console.log(response));
          },
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <TextContainer>
            <p>
              Are you sure you want to delete this product?
            </p>
          </TextContainer>
        </Modal.Section>
      </Modal>

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
                shortcutActions={{
                  content: 'Delete',
                  onAction: () => {
                    setPid(id);
                    handleChange();
                  }
                }}
              >
                <TextStyle variant="bodyMd" fontWeight="bold" as="h3">
                  {title}
                </TextStyle>
              </ResourceItem>
            );
          }}
        />
      </Card >
    </>
  );
}

export default ProductList;