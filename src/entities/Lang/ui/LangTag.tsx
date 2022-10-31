import { reflect } from '@effector/reflect';
import { memo } from 'react';
import { Badge } from 'rsuite';

import { $langsColors } from '../model';

type TLangTagProps = {
  name: string;
  colors: Record<string, string | undefined>;
};

const LangTagView = ({ name, colors }: TLangTagProps) => {
  return (
    <span className='flex items-center gap-1'>
      {colors[name] && (
        <Badge
          style={{
            backgroundColor: colors[name],
          }}
        />
      )}
      {name}
    </span>
  );
};

export const LangTag = memo(
  reflect({
    view: LangTagView,
    bind: {
      colors: $langsColors,
    },
  }),
);
