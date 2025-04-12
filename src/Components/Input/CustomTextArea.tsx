import React, { ChangeEvent } from "react";

interface CustomTextAreaProps {
  type?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  req?: boolean;
}
const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  placeholder = "",
  handleChange,
}) => {
  const handleFun = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
  };
  return (
    <textarea
      rows={4}
      placeholder={placeholder}
      className="p-3 rounded border border-white text-white placeholder:text-white"
      onChange={(e) => handleFun(e)}
    ></textarea>
  );
};

export default CustomTextArea;
