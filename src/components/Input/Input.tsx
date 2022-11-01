import React from "react";
import Image from "next/image";
import searchIcon from "../../../public/search.png";
import inputCss from "./Input.module.css";

type InputProps = {
  icon: StaticImageData;
  iconAlt: string;
  handleClick: (e: any) => void;
  placeholder: string;
  layoutComponentClasses?: string;
  testId?: string;
};

const Input = ({
  icon,
  iconAlt,
  placeholder,
  handleClick,
  layoutComponentClasses,
  testId,
}: InputProps) => {
  return (
    <div className={`${inputCss.inputContainer}  ${layoutComponentClasses}`}>
      <Image src={icon} alt={iconAlt}></Image>
      <input
        data-testid={testId}
        onClick={handleClick}
        className={inputCss.input}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
