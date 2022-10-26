import { reflect } from '@effector/reflect';
import { memo, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Button, Form, InputGroup } from 'rsuite';

import { ReactComponent as RemoveIcon } from '@/shared/icons/remove-icon.svg';

import { searchReposForm } from '../../model';

type TSearchReposQueryFieldProps = {
  hasCancel: boolean;
  reset: () => void;
};

const SearchReposQueryFieldView = ({
  hasCancel,
  reset,
}: TSearchReposQueryFieldProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useHotkeys('ctrl+k', (e) => {
    e.preventDefault();
    searchInputRef.current?.focus();
  });

  return (
    <Form.Group className='flex gap-2' controlId='query'>
      <InputGroup inside className='border-2'>
        <Form.Control
          errorPlacement='topStart'
          inputRef={searchInputRef}
          name='query'
          placeholder='Search...'
          type='search'
        />
        <InputGroup.Addon className='-mr-[1px] h-full !p-0'>
          {hasCancel && (
            <Button
              appearance='subtle'
              className='mr-2 flex items-center justify-center p-0'
              onClick={reset}
            >
              <RemoveIcon className='h-5 w-5 fill-red-400/50 transition-all duration-150 ease-in-out hover:fill-red-400' />
            </Button>
          )}

          <Button appearance='primary' className='rounded-l-none' type='submit'>
            Search
          </Button>
        </InputGroup.Addon>
      </InputGroup>
    </Form.Group>
  );
};

export const SearchReposQueryField = memo(
  reflect({
    view: SearchReposQueryFieldView,
    bind: {
      hasCancel: searchReposForm.$hasQueryFieldCancelBtn,
      reset: searchReposForm.queryResetted,
    },
  }),
);
