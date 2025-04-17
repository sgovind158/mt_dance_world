import React from "react";

function Loader() {
  return (
    <div
      className={
        "fixed top-0 left-0 z-50 block h-full w-full bg-white opacity-75"
      }
    >
      <div className="flex h-screen flex-col items-center justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default Loader;
