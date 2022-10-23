import { Badge, BadgeProps } from '@nextui-org/react';
import { memo, MouseEventHandler } from 'react';

type TLangBadgeProps = BadgeProps & {
  name: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
};

const LangBadgeView = ({ name, ...props }: TLangBadgeProps) => {
  return (
    <Badge
      disableOutline
      color='primary'
      css={{
        p: '$1 $2',
        my: '$2',
        height: 'fit-content',
        cursor: 'pointer',

        '&:hover': {
          backgroundColor: '$errorLight',
          color: '$error',
        },
      }}
      variant='flat'
      {...props}
    >
      {name}
    </Badge>
  );
};

export const LangBadge = memo(LangBadgeView);
