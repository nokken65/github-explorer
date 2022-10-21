import {
  Button as NextUIButton,
  ButtonProps as NextUIButtonProps,
  styled,
} from '@nextui-org/react';

type ButtonProps = NextUIButtonProps;

const StyledButton = styled(NextUIButton, {
  fontWeight: '$bold',
});

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.Group = NextUIButton.Group;

export { Button };
