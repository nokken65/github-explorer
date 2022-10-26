import { Link } from 'atomic-router-react';
import { Footer as RSFooter } from 'rsuite';

const Footer = () => {
  return (
    <RSFooter className='flex justify-center py-4'>
      <p>
        Powered with ❤️ from{' '}
        <Link rel='noreferrer' target='_blank' to='https://github.com/nokken65'>
          nokken65
        </Link>
      </p>
    </RSFooter>
  );
};

export { Footer };
