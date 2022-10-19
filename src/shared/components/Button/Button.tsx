import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
  styled,
} from '@nextui-org/react';
import { memo } from 'react';

type ButtonProps = NextUIButtonProps;

const StyledButton = styled(NextUIButton, {
  fontWeight: '$bold',
});

const ButtonView = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const Button = memo(ButtonView);

export { Button };
