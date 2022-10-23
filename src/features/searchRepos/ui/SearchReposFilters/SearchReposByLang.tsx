import { reflect } from '@effector/reflect';
import { Collapse } from '@nextui-org/react';
import { memo } from 'react';

import { LangBadge } from '@/entities/Lang';
import { Row } from '@/shared/components';

import { searchReposParams } from '../../model';
import { SelectLangsForm } from './SelectLangsForm';

type TSearchReposByLangProps = {
  langs: string[];
  removeLang: (lang: string) => void;
};

const SearchReposByLangView = ({
  langs,
  removeLang,
}: TSearchReposByLangProps) => {
  return (
    <Collapse
      shadow
      css={{ width: '100%', '&>div:first-child': { py: '$4' } }}
      divider={false}
      title='Languages'
    >
      <Row css={{ flexWrap: 'nowrap', p: '$2' }}>
        <SelectLangsForm />
        <Row
          as='ul'
          css={{
            gap: '$2',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          {langs.map((l) => (
            <LangBadge as='li' key={l} name={l} onClick={() => removeLang(l)} />
          ))}
        </Row>
      </Row>
    </Collapse>
  );
};

export const SearchReposByLang = memo(
  reflect({
    view: SearchReposByLangView,
    bind: {
      langs: searchReposParams.$langs,
      removeLang: searchReposParams.removeLang,
    },
  }),
);
