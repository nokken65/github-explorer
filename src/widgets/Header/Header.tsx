import { Navbar } from '@nextui-org/react';
import { memo } from 'react';

import { DarkModeToggler } from '@/features/toggleDarkMode';
import { Link } from '@/shared/components';
import { homeRoute } from '@/shared/config/routes';

const HeaderView = () => {
  return (
    <Navbar isCompact shouldHideOnScroll maxWidth='fluid' variant='sticky'>
      <Navbar.Brand>
        <Link css={{ fontSize: '1.5rem', fontWeight: 'bold' }} to={homeRoute}>
          GExplorer
        </Link>
      </Navbar.Brand>
      <Navbar.Content>
        <li>
          <DarkModeToggler />
        </li>
      </Navbar.Content>
    </Navbar>
  );
};

export const Header = memo(HeaderView);
