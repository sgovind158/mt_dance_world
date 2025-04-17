import React from 'react';

interface ISpinnerProps {
  className?: string;
}
export const Spinner = ({ className }: ISpinnerProps) => {
  return (
    <>
      <span
        className={`mr-2 h-5 w-5 animate-spin rounded-full border-2 border-blue-400 border-t-transparent ${className}`}
      />
    </>
  );
};
export default Spinner;
