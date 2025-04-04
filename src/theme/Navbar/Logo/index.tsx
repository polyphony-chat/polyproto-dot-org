import React, {type ReactNode} from 'react';
import Logo from '@theme/Logo';

export default function NavbarLogo(): ReactNode {
  return (
    <Logo
      className="navbar__brand text-white"
      imageClassName="navbar__logo size-10"
      titleClassName="navbar__title text--truncate"
    />
  );
}
