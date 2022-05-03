import React from 'react';
import { CardDescription, CardIcon, CardLink, CardTitle } from './CardLink';

export default () => {
  return (
    <CardLink>
      <CardIcon>
        <svg
          aria-hidden="true"
          height="32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path d="M1.253 10.875l5.376 2.29a3.496 3.496 0 0 0 2.742 0l5.376-2.29.635.27a1.026 1.026 0 0 1 0 1.884l-6.598 2.81a1.997 1.997 0 0 1-1.568 0L.618 13.03a1.026 1.026 0 0 1 0-1.884l.635-.27zm13.494-4.087l.635.27a1.026 1.026 0 0 1 0 1.884l-6.598 2.811a1.997 1.997 0 0 1-1.568 0L.618 8.942a1.026 1.026 0 0 1 0-1.884l.635-.27 5.376 2.29a3.496 3.496 0 0 0 2.742 0l5.376-2.29zM8.784.16l6.598 2.811a1.026 1.026 0 0 1 0 1.884L8.784 7.666a1.997 1.997 0 0 1-1.568 0L.618 4.855a1.026 1.026 0 0 1 0-1.884L7.216.161a1.997 1.997 0 0 1 1.568 0z"></path>
        </svg>
      </CardIcon>
      <CardTitle>No-code</CardTitle>
      <CardDescription>
        Find out about options to use Stripe without writing any code.
      </CardDescription>
    </CardLink>
  );
};
