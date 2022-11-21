import * as React from 'react';

export const frontmatter = {
  seo: {
    title: 'Demo API Portal',
  }
};

import { Flex, Jumbotron } from '@theme/ui';
import { Button } from '@theme/Button';
import { H1, H2 } from '@theme/Typography';


export default function () {
  return (
    <Jumbotron>
      <H1>Redocly training</H1>
      <H2>A starter developer portal with training exercises</H2>
      <Flex p={20} justifyContent="center">
        <Button color="secondary" size="large" to="https://app.redoc.ly">
          Redocly app
        </Button>
        <Button color="secondary" variant="outlined" size="large" to="/markdown/">
          Get started
        </Button>
        <Button color="secondary" variant="outlined" size="large" to="https://redoc.ly/docs">
          Docs
        </Button>
      </Flex>
      <Flex p={35}></Flex>
    </Jumbotron>
  );
}
