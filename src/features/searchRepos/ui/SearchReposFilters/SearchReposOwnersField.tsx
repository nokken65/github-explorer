import { memo } from 'react';
import { Form, TagInput } from 'rsuite';

const SearchReposOwnersFieldView = () => {
  return (
    <Form.Group controlId='owners'>
      <Form.ControlLabel>Owners</Form.ControlLabel>
      {/* @ts-ignore */}
      <Form.Control
        block
        accepter={TagInput}
        name='owners'
        placeholder='github, atom, electron...'
        trigger={['Enter', 'Space', 'Comma']}
      />
    </Form.Group>
  );
};

export const SearchReposOwnersField = memo(SearchReposOwnersFieldView);
