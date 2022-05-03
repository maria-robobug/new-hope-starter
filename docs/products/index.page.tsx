import React from 'react';
import { Typography, Box, Article } from '@theme/components';
import { Products } from '../components/Products';

export const frontmatter = {
  seo: {
    title: 'All products',
  },
};

export default function () {
  return (
    <div>
      <Article>
        <Box className="padding-bottom--24">
          <Typography variant="h1" className="padding-top--8">
            Explore all products
          </Typography>
          <Typography
            variant="h2"
            className="padding-top--12"
            fontWeight="var(--regular-font-weight)"
          >
            Browse our guides and examples by product area.
          </Typography>
        </Box>
      </Article>
      <Products />
    </div>
  );
}
