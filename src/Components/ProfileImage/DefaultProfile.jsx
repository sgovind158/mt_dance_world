import Image from "next/image";
import React from "react";
import clsx from "clsx";
import styles from "./styles/defaultProfile.module.scss";

const DefaultProfile = ({
  userName,
  src,
  width,
  height,
  firstCharWidth,
  firstCharHeight,
  objectFit = "cover",
  cssStyle,
}) => {
  let firstChar = "";
  if (typeof userName === "string" && userName?.length > 0) {
    firstChar = userName.charAt(0).toUpperCase();
  }
  return (
    <>
      {src ? (
        <Image
          className={clsx("rounded-full ", cssStyle)}
          src={`${src ? src : ""}`}
          alt={userName}
          width={width}
          height={height}
          objectFit={objectFit}
        />
      ) : (
        <div
          style={{
            width: firstCharWidth,
            height: firstCharHeight,
          }}
          className={clsx(styles.firstChar)}
        >
          {firstChar}
        </div>
      )}
    </>
  );
};

export default DefaultProfile;
