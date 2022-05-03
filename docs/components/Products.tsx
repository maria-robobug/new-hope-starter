import React from 'react';
import { Box, Row, Link } from '@theme/components';
import styled from 'styled-components';
import {
  PaymentsIcon,
  InvoicingIcon,
  BillingIcon,
  TerminalIcon,
  ConnectIcon,
  PaymentLinksIcon,
  CheckoutIcon,
  ElementsIcon,
  RadarIcon,
  SigmaIcon,
  ClimateIcon,
  AtlasIcon,
  IdentityIcon,
  TaxIcon,
  RevenueRecognitionIcon,
  IssuingIcon,
  CapitalIcon,
} from './ProductIcons';

export const ProductList = styled(Box)`
  padding: 32px 0;
  flex-basis: 50%;
`;

const SecondaryProductList = styled(ProductList)`
  background: var(--sail-color-gray-50);
  padding: 32px 20px 32px 48px;
  border-radius: 6px;
`;

export const ProductGroupName = styled(Box).attrs({
  className: 'margin-bottom--12',
})`
  font-size: var(--font-size);
  line-height: 24px;
  font-weight: 600;
`;

export const ProductDescription = styled.span`
  line-height: 20px;
  font-size: 14px;
  text-align: left;
`;
export const ProductName = styled(ProductDescription)`
  font-weight: 600;
  font-size: var(--sail-font-size-14);
`;

const ProductLink = styled(Link)`
  color: var(--text-color);
  margin-top: 12px;
  margin-left: 0;

  & + & {
    margin-left: 0;
  }
`;

const ProductGroup = styled(Box)`
  margin-bottom: 32px;
`;

const ProductContainer = styled(Row).attrs({ alignItems: 'center' })`
  margin: 12px 0;
`;

export const Products = () => {
  return (
    <Row className="margin-top--24">
      <ProductList>
        <ProductGroup>
          <ProductGroupName>Direct payments</ProductGroupName>

          <ProductLink>
            <ProductContainer>
              <PaymentsIcon />
              <Box className="margin-left--16">
                <ProductName>Payments</ProductName>
                <ProductDescription>Online payments</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <InvoicingIcon />
              <Box className="margin-left--16">
                <ProductName>Invoicing</ProductName>
                <ProductDescription>One-off invoices</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <BillingIcon />
              <Box className="margin-left--16">
                <ProductName>Billing</ProductName>
                <ProductDescription>
                  Subscriptions and recurring payments
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <TerminalIcon />
              <Box className="margin-left--16">
                <ProductName>Terminal</ProductName>
                <ProductDescription>
                  In-person and omnichannel payments
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>
        </ProductGroup>

        <ProductGroup>
          <ProductGroupName>Multiparty payments</ProductGroupName>

          <ProductLink>
            <ProductContainer>
              <ConnectIcon />
              <Box className="margin-left--16">
                <ProductName>Connect</ProductName>
                <ProductDescription>
                  Payments for platform and marketplaces
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>
        </ProductGroup>

        <ProductGroup>
          <ProductGroupName>Prebuilt components</ProductGroupName>

          <ProductLink>
            <ProductContainer>
              <PaymentLinksIcon />
              <Box className="margin-left--16">
                <ProductName>Payment Links</ProductName>
                <ProductDescription>No-code payments</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <CheckoutIcon />
              <Box className="margin-left--16">
                <ProductName>Checkout</ProductName>
                <ProductDescription>
                  Prebuilt, Stripe hosted checkout page
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <ElementsIcon />
              <Box className="margin-left--16">
                <ProductName>Elements</ProductName>
                <ProductDescription>
                  Secure frontend UI components
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>
        </ProductGroup>
      </ProductList>

      <SecondaryProductList>
        <ProductGroup>
          <ProductGroupName>Business operations</ProductGroupName>

          <ProductLink>
            <ProductContainer>
              <RadarIcon />
              <Box className="margin-left--16">
                <ProductName>Radar</ProductName>
                <ProductDescription>
                  Fraud and risk management
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <SigmaIcon />
              <Box className="margin-left--16">
                <ProductName>Sigma</ProductName>
                <ProductDescription>Custom reports</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <ClimateIcon />
              <Box className="margin-left--16">
                <ProductName>Climate</ProductName>
                <ProductDescription>
                  Remove carbon as you grow your business
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <AtlasIcon />
              <Box className="margin-left--16">
                <ProductName>Atlas</ProductName>
                <ProductDescription>Startup incorporation</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <IdentityIcon />
              <Box className="margin-left--16">
                <ProductName>Identity</ProductName>
                <ProductDescription>Identity verification</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <TaxIcon />
              <Box className="margin-left--16">
                <ProductName>Tax</ProductName>
                <ProductDescription>
                  Automatic tax calculation
                </ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <RevenueRecognitionIcon />
              <Box className="margin-left--16">
                <ProductName>Revenue Recognition</ProductName>
                <ProductDescription>Accounting automation</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>
        </ProductGroup>

        <ProductGroup>
          <ProductGroupName>Financial services</ProductGroupName>

          <ProductLink>
            <ProductContainer>
              <IssuingIcon />
              <Box className="margin-left--16">
                <ProductName>Issuing</ProductName>
                <ProductDescription>Card creation</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>

          <ProductLink>
            <ProductContainer>
              <CapitalIcon />
              <Box className="margin-left--16">
                <ProductName>Capital</ProductName>
                <ProductDescription>Business financing</ProductDescription>
              </Box>
            </ProductContainer>
          </ProductLink>
        </ProductGroup>
      </SecondaryProductList>
    </Row>
  );
};
