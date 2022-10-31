import { Link } from 'atomic-router-react';
import { memo } from 'react';
import { Header as RSHeader, Nav, Navbar } from 'rsuite';

import { DarkModeToggler } from '@/features/changeTheme';
import { homeRoute } from '@/shared/config/routes';

const HeaderView = () => {
  return (
    <RSHeader className='sticky top-0 z-30'>
      <Navbar className='sticky  flex items-center px-5'>
        <Navbar.Brand
          as='div'
          className='mr-auto flex items-center p-0 text-2xl font-bold'
        >
          <Link to={homeRoute}>GExplorer</Link>
        </Navbar.Brand>
        <Nav pullRight>
          <Nav.Item as={DarkModeToggler} />
        </Nav>
      </Navbar>
    </RSHeader>
  );
};

export const Header = memo(HeaderView);
