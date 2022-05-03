import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  Box,
  Article,
  HeroSection,
  Button,
  Row,
  SecondaryButton,
  GetStartedButton,
} from '@theme/components';
import DeveloperToolsLink from './components/DeveloperToolsLink';
import SecurityLink from './components/SecurityLink';
import NoCodeLink from './components/NoCodeLink';
import { Products } from './components/Products';

export const frontmatter = {
  seo: {
    title: 'Home',
  },
};

export default function () {
  return (
    <div>
      <Article>
        <Box className="padding-bottom--24">
          <Typography variant="h1" className="padding-top--8">
            Documentation
          </Typography>
          <Typography
            variant="h2"
            className="padding-top--12"
            fontWeight="var(--regular-font-weight)"
          >
            Explore our guides and examples to integrate Stripe.
          </Typography>
        </Box>

        <Box className="margin-bottom--16">
          <HeroSection>
            <Box flexGrow={1} className="padding-right--20">
              <Typography variant="h2">Payments</Typography>
              <HeroSection>
                <Typography variant="p" className="padding-top--12">
                  Build a web or mobile integration to accept payments online or
                  in person.
                </Typography>
              </HeroSection>

              <GetStartedButton variant="outlined" to="payments">
                Get started
              </GetStartedButton>
              <Row className="margin-top--24">
                <SecondaryButton
                  className="line-height--16"
                  to="https://stripe.com/docs/payments?payments=online"
                >
                  Online
                </SecondaryButton>
                <SecondaryButton
                  className="line-height--16"
                  to="https://stripe.com/docs/payments?payments=in-person"
                >
                  In-person
                </SecondaryButton>
                <SecondaryButton
                  className="line-height--16"
                  to="https://stripe.com/docs/payments?payments=subscriptions"
                >
                  Subscriptions
                </SecondaryButton>
                <SecondaryButton
                  className="line-height--16"
                  to="https://stripe.com/docs/payments#multiparty-payments"
                >
                  Marketplaces
                </SecondaryButton>
              </Row>
            </Box>
            <Box flexGrow={1}>
              <img src="https://b.stripecdn.com/docs-statics-srv/assets/08626a3ef184ed93033ad6fdc1bf4b74.svg" />
            </Box>
          </HeroSection>
        </Box>
        <Box>
          <Typography className="padding-top--16" variant="h2">
            Learn about Stripe
          </Typography>
          <Row className="margin-top--32 margin-bottom--48">
            <DeveloperToolsLink />
            <SecurityLink />
            <NoCodeLink />
          </Row>
        </Box>
      </Article>
      <Typography variant="h2" className="padding-top--16">
        Browse by product
      </Typography>
      <Products />
    </div>
  );
}
