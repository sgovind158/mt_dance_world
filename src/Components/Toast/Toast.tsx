'use client';
import React from 'react';
import { Toaster } from 'react-hot-toast';
const Toast = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      containerClassName="toastContainer toaster-wrapper123"
      toastOptions={{
        className: 'defaulterrormessage',
        duration: 6000,
        success: {
          duration: 5000,
        },
      }}
    />
  );
};

export default Toast;
