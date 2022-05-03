import React from 'react';
import { ThinTile } from '@theme/ui/Tiles/ThinTile';
import { Link, CardIconName, GithubIcon, CardFooter } from '@theme/components';

export default ({
  to,
  children,
  supportedDevices,
}: React.PropsWithChildren<{
  to?: string;
  supportedDevices: ('web' | 'ios' | 'mobile web' | 'android')[];
}>) => {
  return (
    <ThinTile>
      <Link to={to}>{children}</Link>
      <CardFooter>
        <GithubIcon />
        <CardIconName>{supportedDevices.join(' · ')}</CardIconName>
      </CardFooter>
    </ThinTile>
  );
};
