import { Link as RouterLink } from 'atomic-router-react';
import { forwardRef, memo } from 'react';
import { Link as RSLink } from 'rsuite';

const LinkView = forwardRef((props, ref) => {
  const { as, href, ...rest } = props;

  return (
    <Link as={as} href={href}>
      <a ref={ref} {...rest} />
    </Link>
  );
});

export const Link = memo(LinkView);
