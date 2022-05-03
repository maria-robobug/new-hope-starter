import * as React from 'react';
import {
  Article,
  Typography,
  Box,
  HeroSection,
  HeroImage,
  GetStartedButton,
  CardGroup,
  SimpleCard,
  CardTitle,
  CardDescription,
  Row,
} from '@theme/components';
import { StripeDevelopersImage } from './components';

export const frontmatter = {
  seo: {
    title: 'Contact Us',
  },
};

export default function () {
  return (
    <Article>
      <Box pb="24px">
        <Typography variant="h1" pt="8px">
          Developer tools
        </Typography>

        <Typography
          variant="h2"
          pt="12px"
          lineHeight="28px"
          fontWeight="var(--regular-font-weight)"
        >
          Get up and running with libraries, keys, and integration tools.
        </Typography>
      </Box>

      <HeroSection mb="16px" className="box-divider--light-bottom-1">
        <Box flexGrow={1} pr="20px">
          <Typography variant="h2">Stripe CLI</Typography>

          <HeroSection>
            <Typography variant="p" pr="32px" pb="20px">
              Interact with Stripe from your terminal to bootstrap sample
              projects, send test mode API requests, and debug your integration.
            </Typography>
          </HeroSection>

          <GetStartedButton to="https://stripe.com/docs/stripe-cli">
            Set up the CLI
          </GetStartedButton>
        </Box>

        <Box flexGrow={1}>
          <HeroImage src="https://b.stripecdn.com/docs-statics-srv/assets/stripe-cli.a72afaf7b24bcd17c9094965b8b467b1.png" />
        </Box>
      </HeroSection>

      <Typography variant="h2">Setup and integration</Typography>

      <CardGroup pb="40px" mt="36px">
        <SimpleCard to="https://stripe.com/docs/development/quickstart">
          <CardTitle>Developer setup quickstart</CardTitle>

          <CardDescription>
            Obtain API keys, install a client library, and make a test API
            request.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/libraries">
          <CardTitle>Libraries and UI components</CardTitle>

          <CardDescription>
            Use our client, server, and UI libraries to integrate with Stripe.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://github.com/stripe-samples">
          <CardTitle>Sample integrations</CardTitle>

          <CardDescription>
            Browse and clone working sample integrations from GitHub.
          </CardDescription>
        </SimpleCard>
      </CardGroup>

      <HeroSection mb="16px" className="box-divider--light-bottom-1">
        <Box flexGrow={1} pr="20px">
          <Typography variant="h2">Stripe for Visual Studio Code</Typography>

          <HeroSection>
            <Typography variant="p" pr="32px" pb="20px">
              Bringing you Stripe inside your editor.
            </Typography>
          </HeroSection>

          <GetStartedButton to="https://stripe.com/docs/stripe-vscode">
            Set up Stripe for Visual Studio Code
          </GetStartedButton>
        </Box>

        <Box flexGrow={1}>
          <HeroImage
            ml="auto"
            src="https://b.stripecdn.com/docs-statics-srv/assets/stripe-vscode.31b6821282edf4ad20c7c3106cce9d48.png"
          />
        </Box>
      </HeroSection>

      <Typography variant="h2">Reference docs</Typography>

      <CardGroup pb="40px" mt="36px">
        <SimpleCard to="https://stripe.com/docs/api">
          <CardTitle>API reference</CardTitle>

          <CardDescription>
            View all backend API objects, methods, attributes, and responses.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/js">
          <CardTitle>Stripe.js reference</CardTitle>

          <CardDescription>
            Look up objects and methods in our browser-side JavaScript library.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/cli">
          <CardTitle>Stripe CLI reference</CardTitle>

          <CardDescription>
            View every command and flag in our command-line interface.
          </CardDescription>
        </SimpleCard>
      </CardGroup>

      <Typography variant="h2">Testing and going live</Typography>

      <CardGroup pb="40px" mt="36px">
        <SimpleCard to="https://stripe.com/docs/testing">
          <CardTitle>Test your payments</CardTitle>

          <CardDescription>
            Use test payment cards to prepare for different scenarios.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/development/checklist">
          <CardTitle>Go-live checklist</CardTitle>

          <CardDescription>
            Ensure a smooth transition when taking your integration live.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/webhooks">
          <CardTitle>Webhooks</CardTitle>

          <CardDescription>
            Listen for events on your Stripe account, trigger reactions.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/upgrades">
          <CardTitle>API upgrades and changelog</CardTitle>

          <CardDescription>
            Keep track of changes and upgrades to the Stripe API.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/error-codes">
          <CardTitle>Error codes</CardTitle>

          <CardDescription>
            Learn more about common error codes and how to resolve them.
          </CardDescription>
        </SimpleCard>

        <SimpleCard to="https://stripe.com/docs/rate-limits">
          <CardTitle>Rate limits</CardTitle>

          <CardDescription>
            Learn about API rate limits and how to work with them.
          </CardDescription>
        </SimpleCard>
      </CardGroup>

      <Typography variant="h2" mt="48px">
        Developer community
      </Typography>

      <Row mt="20px">
        <SimpleCard to="https://www.youtube.com/stripedevelopers">
          <CardTitle>YouTube tutorials</CardTitle>

          <CardDescription>
            Watch developer tutorials on our YouTube channel.
          </CardDescription>
          <StripeDevelopersImage />
        </SimpleCard>

        <SimpleCard>
          <CardTitle>YouTube tutorials</CardTitle>

          <CardDescription>
            Watch developer tutorials on our YouTube channel.
          </CardDescription>
        </SimpleCard>
      </Row>
    </Article>
  );
}
