import React, { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = (props) => {
  const title = "Click Me Product",
    { ...rest } = props;
  return (
    <button title={title} {...rest}>
      Click Me
    </button>
  );
};
export default Button;
