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
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7V5a5 5 0 1 1 10 0v2h.5a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zm5 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM11 7V5a3 3 0 1 0-6 0v2z"
            fillRule="evenodd"
          ></path>
        </svg>
      </CardIcon>
      <CardTitle>Security</CardTitle>
      <CardDescription>
        Strengthen your integration security and learn about sensitive data.
      </CardDescription>
    </CardLink>
  );
};
