import React, { ChangeEvent } from "react";

interface CustomInputProps {
  type?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  req?: boolean;
}
const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  placeholder = "",
  handleChange,
  req = false,
}) => {
  const handleFun = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  return (
    <input
      required={req ? req : false}
      type={type}
      placeholder={placeholder}
      className="p-3 rounded border border-white text-white placeholder:text-white"
      onChange={(e) => handleFun(e)}
    />
  );
};

export default CustomInput;
