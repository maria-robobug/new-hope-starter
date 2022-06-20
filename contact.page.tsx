import * as React from 'react';

export const frontmatter = {
  seo: {
    title: 'Contact Us',
  }
};

import { Flex, WideTile  } from '@theme/ui';

export default function () {
  return (
    <Flex justifyContent="space-between">
      <WideTile to="https://google.com" title="Can't find your answer?">
        Google it! <br/>
        Use Google to find things.
      </WideTile>
    </Flex>
  );
}