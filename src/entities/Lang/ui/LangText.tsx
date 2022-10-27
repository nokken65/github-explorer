import { memo } from 'react';
import { Badge } from 'rsuite';

type TLangTextProps = {
  name: string;
  color?: string;
};

const LangTextView = ({ name, color }: TLangTextProps) => {
  return (
    <span className='flex items-center gap-1'>
      {color && (
        <Badge
          style={{
            borderRadius: '50%',
            minWidth: '12px',
            minHeight: '12px',
            backgroundColor: color,
          }}
        />
      )}
      {name}
    </span>
  );
};

export const LangText = memo(LangTextView);
