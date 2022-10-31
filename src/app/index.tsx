import '@unocss/reset/tailwind.css';
import 'uno.css';
import '@/shared/styles/index.scss';

import { reflect } from '@effector/reflect';
import { Link } from 'atomic-router-react';

import { langModel } from '@/entities/Lang';
import { ThemeSelector } from '@/features/changeTheme';
import { Tag } from '@/shared/components';

import { withProviders } from './providers';

const AppView = () => {
  return (
    <div className='flex flex-col gap-4 p-10'>
      <ThemeSelector />
      {/* <button>click</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        doloremque ipsam quia ipsum ad autem? Odit porro alias veniam aliquam
        saepe, ab magnam iste sed dolorum ipsum recusandae perspiciatis animi.
      </p> */}

      <Tag>plain</Tag>
      <Tag isClosable as='button' size='sm'>
        button
      </Tag>
      <Tag isClosable as='button' size='md'>
        button
      </Tag>
      <Tag isClosable as='button' size='lg'>
        button
      </Tag>
      <Tag as={Link} to='#'>
        link 2
      </Tag>
    </div>
  );
};

const App = reflect({
  view: AppView,
  bind: {},
  hooks: {
    mounted: () => {
      langModel.loadLangsFx();
    },
  },
});

export default withProviders(App);
