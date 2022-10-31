import { reflect } from '@effector/reflect';
import { memo, useMemo } from 'react';
import { Badge, Container, Form, TagPicker } from 'rsuite';

import { langModel, TRecordLangs } from '@/entities/Lang';

type TSearchReposLangsFieldProps = {
  langs: TRecordLangs;
};

const SearchReposLangsFieldView = ({ langs }: TSearchReposLangsFieldProps) => {
  const data = useMemo(
    () =>
      Object.keys(langs).map((item) => ({
        label: item,
        value: item,
        color: langs[item].color,
      })),
    [langs],
  );

  return (
    <Form.Group controlId='langs'>
      <Form.ControlLabel>Languages</Form.ControlLabel>
      <Form.Control
        block
        virtualized
        accepter={TagPicker}
        data={data}
        name='langs'
        placeholder='C++, Java, JavaScript...'
        renderMenuItem={(label, item) => (
          <Container className='flex-row flex-nowrap items-center justify-between'>
            <p className='overflow-hidden text-ellipsis whitespace-nowrap'>
              {label}
            </p>
            {item.color && (
              <Badge
                style={{
                  background: item.color,
                }}
              />
            )}
          </Container>
        )}
      />
    </Form.Group>
  );
};

export const SearchReposLangsField = memo(
  reflect({
    view: SearchReposLangsFieldView,
    bind: {
      langs: langModel.$langs,
    },
  }),
);
