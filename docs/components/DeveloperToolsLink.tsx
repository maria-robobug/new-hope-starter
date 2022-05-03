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
            d="M5.128 0h5.744c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512S16 3.345 16 5.128v5.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H5.128c-1.783 0-2.43-.186-3.082-.534s-1.163-.86-1.512-1.512C.186 13.302 0 12.655 0 10.872V5.128c0-1.783.186-2.43.534-3.082A3.635 3.635 0 0 1 2.046.534C2.698.186 3.345 0 5.128 0zM9 11a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zM8 8.997a.997.997 0 0 0-.357-.768L4.702 5.288a1 1 0 0 0-1.414 1.414l2.295 2.295-2.295 2.296a1 1 0 0 0 1.414 1.414l2.941-2.941c.022-.019.044-.038.064-.059A.997.997 0 0 0 8 8.997z"
            fillRule="evenodd"
          ></path>
        </svg>
      </CardIcon>
      <CardTitle>Developer tools</CardTitle>
      <CardDescription>
        Get up and running with libraries, keys, and integration tools.
      </CardDescription>
    </CardLink>
  );
};
