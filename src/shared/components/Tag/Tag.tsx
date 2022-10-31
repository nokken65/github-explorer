import clsx from 'clsx';
import { memo, MouseEventHandler } from 'react';

import { ReactComponent as CloseIcon } from '@/shared/icons/remove-icon.svg';
import { PolymorphicComponentProps } from '@/shared/types';

import styles from './Tag.module.scss';

type TTagProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    size?: 'sm' | 'md' | 'lg';
    isHovered?: boolean;
    isClosable?: boolean;
    onClose?: MouseEventHandler<SVGElement>;
  }
>;

const Tag = memo(
  <C extends React.ElementType = 'span'>({
    as,
    children,
    size = 'md',
    isHovered = false,
    isClosable = false,
    onClose,
    ...rest
  }: TTagProps<C>) => {
    const Component = as || 'span';

    const isLink = Object.hasOwn(rest, 'href') || Object.hasOwn(rest, 'to');

    return (
      <Component
        className={clsx(
          styles.tag,
          (isHovered || isLink) && styles['tag-hovered'],
          isClosable && !isLink && styles['tag-closable'],
          size === 'sm' && styles['tag-sm'],
          size === 'md' && styles['tag-md'],
          size === 'lg' && styles['tag-lg'],
        )}
        {...rest}
      >
        {children}
        {isClosable && !isLink && (
          <CloseIcon
            className={styles['tag-icon-close']}
            role='button'
            onClick={onClose}
          />
        )}
      </Component>
    );
  },
);

if (import.meta.env.DEV) {
  Tag.displayName = 'Tag';
}

export { Tag };
