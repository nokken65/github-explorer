import { memo } from 'react';
import { Form, Radio, RadioGroup } from 'rsuite';

import { ReactComponent as OrderIcon } from '@/shared/icons/sort-order-icon.svg';

const SearchReposOrderFieldView = () => {
  return (
    <Form.Group controlId='order'>
      <Form.Control
        inline
        accepter={RadioGroup}
        appearance='picker'
        name='order'
      >
        <Radio value='desc'>
          <OrderIcon className='rotate-180' />
        </Radio>
        <Radio value='asc'>
          <OrderIcon />
        </Radio>
      </Form.Control>
    </Form.Group>
  );
};

export const SearchReposOrderField = memo(SearchReposOrderFieldView);
