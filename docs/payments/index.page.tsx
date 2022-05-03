import * as React from 'react';
import styled from 'styled-components';
import { InfoBlock, GithubRepoTile } from './components';
import {
  Link,
  Box,
  Article,
  Typography,
  CardImage,
  Card,
  CardDescription,
  CardIconName,
  CardTitle,
  SecondaryButton,
  CardGroup,
  CardFooter,
  Row,
  SimpleCard,
  HeroSection,
  HeroImage,
  GetStartedButton,
  List
} from '@theme/components';
import {
  BillingIcon,
  PaymentsIcon,
  ConnectIcon,
} from '../components/ProductIcons';

export const frontmatter = {
  seo: {
    title: 'Contact Us',
  },
};

const ListHeader = styled.span`
  font-size: var(--font-size);
  color: var(--text-color);
  font-weight: var(--medium-font-weight);
  line-height: 24px;
`;

export default function () {
  return (
    <Article>
      <Box className="padding-bottom--24">
        <Typography variant="h1" className="padding-top--8">
          Payments
        </Typography>
        <Typography
          variant="h2"
          className="padding-top--12"
          fontWeight="var(--regular-font-weight)"
        >
          Find a guide to integrate Stripe's payments APIs.
        </Typography>
      </Box>
      <Box>
        <InfoBlock>
          Not ready for a full integration?{' '}
          <Link to="https://stripe.com/docs/payments/no-code">
            See options for getting started quickly without code →
          </Link>
        </InfoBlock>
      </Box>
      <CardGroup>
        <Card>
          <Link to="https://stripe.com/docs/checkout/quickstart">
            <CardImage src="https://b.stripecdn.com/docs-statics-srv/assets/Integration-builder.c2d65ad9d3fff3b068d39e7d61c4dade.svg" />

            <CardTitle>Accept online payments</CardTitle>
          </Link>

          <Box>
            <CardDescription>
              Build a payment form or use a prebuilt checkout page to accept
              online payments.
            </CardDescription>
          </Box>

          <CardFooter>
            <PaymentsIcon width={20} height={20} />

            <CardIconName>Payments</CardIconName>
          </CardFooter>
        </Card>

        <Card>
          <Link to="https://stripe.com/docs/checkout/quickstart">
            <CardImage src="https://b.stripecdn.com/docs-statics-srv/assets/Subscriptions.ab795f59a7ed682b0ce5756527b7b915.svg" />

            <CardTitle>Create a subscription</CardTitle>
          </Link>

          <Box>
            <CardDescription>
              Set up recurring billing for your SaaS or e-commerce business.
            </CardDescription>
          </Box>

          <CardFooter>
            <BillingIcon width={20} height={20} />

            <CardIconName>Billing</CardIconName>
          </CardFooter>
        </Card>

        <Card>
          <Link to="https://stripe.com/docs/checkout/quickstart">
            <CardImage src="https://b.stripecdn.com/docs-statics-srv/assets/Payouts.3e6595c7fb4771467544872447d53f20.svg" />

            <CardTitle>Receive payouts</CardTitle>
          </Link>

          <Box>
            <CardDescription>
              Set up your bank account to receive payouts.
            </CardDescription>
          </Box>

          <CardFooter>
            <PaymentsIcon width={20} height={20} />

            <CardIconName>Payments</CardIconName>
          </CardFooter>
        </Card>
      </CardGroup>
      <Box>
        <Typography variant="h2">Multiparty payments</Typography>
        <p>
          Build a platform, marketplace, or any two-sided business with Stripe{' '}
          <Link to="https://stripe.com/docs/connect">Connect</Link>.
        </p>

        <CardGroup>
          <Card>
            <Link to="https://stripe.com/docs/checkout/quickstart">
              <CardImage src="https://b.stripecdn.com/docs-statics-srv/assets/Marketplace.dc7aec36967607db1a0bc5e1e2a4fa7d.svg" />

              <CardTitle>Collect payments then pay out</CardTitle>
            </Link>

            <Box>
              <CardDescription>
                Onboard, verify, and pay out to sellers or service providers.
              </CardDescription>
            </Box>

            <CardFooter>
              <ConnectIcon width={20} height={20} />

              <CardIconName>Connect</CardIconName>
            </CardFooter>
          </Card>

          <Card>
            <Link to="https://stripe.com/docs/checkout/quickstart">
              <CardImage src="https://b.stripecdn.com/docs-statics-srv/assets/Platform.b0e9aacf93e48bf0fcbd9de74e2e34bf.svg" />

              <CardTitle>Enable business to accept payments directly</CardTitle>
            </Link>

            <Box>
              <CardDescription>
                Facilitate direct payments between other businesses and their
                own customers.
              </CardDescription>
            </Box>

            <CardFooter>
              <ConnectIcon width={20} height={20} />

              <CardIconName>Connect</CardIconName>
            </CardFooter>
          </Card>

          <Card>
            <Link to="https://stripe.com/docs/checkout/quickstart">
              <CardImage src="https://b.stripecdn.com/docs-statics-srv/assets/Payouts-diagram.04991d9ccc606f94f299d80f983b7ad0.svg" />

              <CardTitle>
                Pay out money
                <SecondaryButton as="button">No code required</SecondaryButton>
              </CardTitle>
            </Link>

            <Box>
              <CardDescription>
                Set up your bank account to receive payouts.
              </CardDescription>
            </Box>

            <CardFooter>
              <ConnectIcon width={20} height={20} />

              <CardIconName>Connect</CardIconName>
            </CardFooter>
          </Card>
        </CardGroup>
      </Box>

      <Box>
        <Typography variant="h2">Clone a sample project</Typography>
        <CardGroup>
          <GithubRepoTile
            to="https://github.com/stripe-samples/accept-a-payment"
            supportedDevices={['web', 'ios', 'android']}
          >
            Accept a payment
          </GithubRepoTile>

          <GithubRepoTile
            to="https://github.com/stripe-samples/checkout-single-subscription"
            supportedDevices={['web', 'mobile web']}
          >
            Start a simple subscription
          </GithubRepoTile>

          <GithubRepoTile
            to="https://github.com/stripe-samples/checkout-one-time-payments"
            supportedDevices={['web', 'mobile web']}
          >
            Use a prebuilt checkout form
          </GithubRepoTile>
        </CardGroup>
      </Box>

      <Box>
        <Typography variant="h2">After the payment</Typography>
        <CardGroup>
          <SimpleCard to="https://stripe.com/docs/payments/cards/overview">
            <CardTitle>How cards work</CardTitle>

            <CardDescription>
              See how a credit or debit card payment works online step by step
            </CardDescription>
          </SimpleCard>

          <SimpleCard to="https://stripe.com/docs/payouts">
            <CardTitle>Payouts</CardTitle>

            <CardDescription>
              Set up your bank account to receive payouts
            </CardDescription>
          </SimpleCard>

          <SimpleCard to="https://stripe.com/docs/declines">
            <CardTitle>Declines</CardTitle>

            <CardDescription>
              Identify causes and build automatice retries.
            </CardDescription>
          </SimpleCard>

          <SimpleCard to="https://stripe.com/docs/payments/cards/overview">
            <CardTitle>Receopts</CardTitle>

            <CardDescription>
              Send email receipts built by us or customized.
            </CardDescription>
          </SimpleCard>

          <SimpleCard to="https://stripe.com/docs/payments/cards/overview">
            <CardTitle>Refund</CardTitle>

            <CardDescription>
              Refund or cancel customers' payments and avoid disputes.
            </CardDescription>
          </SimpleCard>

          <SimpleCard to="https://stripe.com/docs/payments/cards/overview">
            <CardTitle>Webhook events</CardTitle>

            <CardDescription>
              Get notified about payment events and trigger actions.
            </CardDescription>
          </SimpleCard>
        </CardGroup>
        <Box className="padding-top--16 flex-direction--rowReversed">
          <GetStartedButton to="https://stripe.com/docs/payments/after-the-payment">
            See all
          </GetStartedButton>
        </Box>
      </Box>
      <Box className="margin-bottom--16 box-divider--light-bottom-1">
        <HeroSection>
          <Box flexGrow={1} className="padding-right--20">
            <Typography variant="h2">Add payment methods</Typography>
            <HeroSection>
              <Typography
                variant="p"
                className="padding-right--32 padding-bottom--20"
              >
                Integrate digital wallets like Alipay, Apple Pay, and Google
                Pay, or let customers pay with other payment methods like bank
                debits or transfers. Payment methods help boost conversion.
              </Typography>
            </HeroSection>

            <GetStartedButton to="https://stripe.com/docs/payments/payment-methods/overview">
              Get started
            </GetStartedButton>
          </Box>
          <Box flexGrow={1}>
            <HeroImage src="https://b.stripecdn.com/docs-statics-srv/assets/payment-method-overview.bffa404f268db830feac059711ba83e6.svg" />
          </Box>
        </HeroSection>
      </Box>
      
      <Typography variant="h2">More guides</Typography>
      
      <Row className='flex-justifyContent--spaceBetween margin-top--16'>
        <Box>
          <ListHeader>Integrations</ListHeader>
          
          <List fontSize='14px' lineHeight='22px' pt='4px'>
            <li><Link to='https://stripe.com/docs/payments/accept-a-payment'>One time</Link></li>
            <li><Link to='https://stripe.com/docs/billing/quickstart'>Subscriptions</Link></li>
            <li><Link to='https://stripe.com/docs/invoicing'>Invoices</Link></li>
            <li><Link to='https://stripe.com/docs/connect'>Multiparty</Link></li>
            <li><Link to='https://stripe.com/docs/terminal'>In-person POS</Link></li>
          </List>
        </Box>

        <Box>
          <ListHeader>Payment methods</ListHeader>
          
          <List fontSize='14px' lineHeight='22px' pt='4px'>
            <li><Link to='https://stripe.com/docs/payments/accept-a-payment'>Bank debits</Link></li>
            <li><Link to='https://stripe.com/docs/billing/quickstart'>Bank redirects</Link></li>
            <li><Link to='https://stripe.com/docs/invoicing'>Creadit transfers</Link></li>
            <li><Link to='https://stripe.com/docs/connect'>Buy now, pay later</Link></li>
            <li><Link to='https://stripe.com/docs/terminal'>Vouchers</Link></li>
            <li><Link to='https://stripe.com/docs/terminal'>Wallets</Link></li>
          </List>
        </Box>

        <Box>
          <ListHeader>Managing payments</ListHeader>
          
          <List fontSize='14px' lineHeight='22px' pt='4px'>
            <li><Link to='https://stripe.com/docs/payments/accept-a-payment'>Testing</Link></li>
            <li><Link to='https://stripe.com/docs/billing/quickstart'>SCA regulation support</Link></li>
            <li><Link to='https://stripe.com/docs/invoicing'>Handling desputies</Link></li>
            <li><Link to='https://stripe.com/docs/connect'>Fraud prevention</Link></li>
            <li><Link to='https://stripe.com/docs/terminal'>3D Secure</Link></li>
          </List>
        </Box>

        <Box>
          <ListHeader>About the APIs</ListHeader>
          
          <List fontSize='14px' lineHeight='22px' pt='4px'>
            <li><Link to='https://stripe.com/docs/payments/accept-a-payment'>Payment Intents</Link></li>
            <li><Link to='https://stripe.com/docs/billing/quickstart'>Setup Intents</Link></li>
            <li><Link to='https://stripe.com/docs/invoicing'>Payment methods</Link></li>
            <li><Link to='https://stripe.com/docs/connect'>Older APIs</Link></li>
          </List>
        </Box>

        <Box>
          <ListHeader>By product</ListHeader>
          
          <List fontSize='14px' lineHeight='22px' pt='4px'>
            <li><Link to='https://stripe.com/docs/payments/accept-a-payment'>Payments</Link></li>
            <li><Link to='https://stripe.com/docs/billing/quickstart'>Billing</Link></li>
            <li><Link to='https://stripe.com/docs/invoicing'>Connect</Link></li>
            <li><Link to='https://stripe.com/docs/connect'>Terminal</Link></li>
          </List>
        </Box>
      </Row>
    </Article>
  );
}
