import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
  MediaCard,
} from "@shopify/polaris";

export default function AdditionalPage() {
  return (
    <Page>
      <MediaCard
        title="Getting Started"
        primaryAction={{
          content: "Learn about getting started",
          onAction: () => {},
        }}
        description="Discover how Shopify can power up your entrepreneurial journey."
        popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
      >
        <img
          alt=""
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
        />
      </MediaCard>
    </Page>
  );
}

function Code({ children }) {
  return (
    <Box
      as="span"
      padding="025"
      paddingInlineStart="100"
      paddingInlineEnd="100"
      background="bg-surface-active"
      borderWidth="025"
      borderColor="border"
      borderRadius="100"
    >
      <code>{children}</code>
    </Box>
  );
}
