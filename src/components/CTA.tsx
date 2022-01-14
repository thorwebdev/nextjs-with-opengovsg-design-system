import { Link as ChakraLink, Button } from "@opengovsg/design-system-react";

import { Container } from "./Container";

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <ChakraLink isExternal href="https://www.open.gov.sg/" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline">
        OpenGovSG
      </Button>
    </ChakraLink>

    <ChakraLink
      isExternal
      href="https://github.com/thorwebdev/nextjs-with-opengovsg-design-system"
      flexGrow={3}
      mx={2}
    >
      <Button width="100%" variant="solid">
        View Repo
      </Button>
    </ChakraLink>
  </Container>
);
