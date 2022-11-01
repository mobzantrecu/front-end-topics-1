import React, { useMemo } from "react";
import buttonStyles from "./Button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: JSX.Element;
  modifier?: "outline" | "default";
  layoutComponentClasses?: string;
  testId?: string;
};

const Button = ({
  children,
  onClick,
  modifier = "default",
  layoutComponentClasses = "",
  testId,
}: ButtonProps) => {
  const styleModifier = useMemo(() => buttonStyles[modifier], [modifier]);

  return (
    <button
      onClick={onClick}
      className={`${buttonStyles.button}  ${styleModifier} ${layoutComponentClasses}`}
      data-test-id={testId}
    >
      {children}
    </button>
  );
};

export default Button;
