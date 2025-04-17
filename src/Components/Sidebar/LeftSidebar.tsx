import React from "react";
import clsx from "clsx";
import styles from "./style/leftSidebar.module.scss";
import Link from "next/link";
import { userProfileNavData } from "./navigationData";
import { usePathname } from "next/navigation";
import RightArrow from "../svg/RightArrow";

import DefaultProfile from "../ProfileImage/DefaultProfile";

const LeftSidebar = () => {
  const pathname = usePathname();
  const userDetails = {
    name: "Mohan Nayak",
  };

  return (
    <div className={clsx(styles.leftSidebarMaindDiv, " ")}>
      {/* upper div */}
      <div
        className={clsx(
          styles.upperDiv,
          "flex  gap-2 mt-4 items-center px-4 border-b border-b-[#e3e3e3] pb-4  "
        )}
      >
        <DefaultProfile
          firstCharHeight={"52px"}
          firstCharWidth={"52px"}
          userName={userDetails?.name}
          src={""}
          width={52}
          height={52}
          cssStyle="w-[52px] h-[52px]"
        />

        <div>
          <span>{userDetails?.name}</span>
        </div>
      </div>
      {/* lower div */}
      <div className={clsx("px-4 mt-6", styles.lowerDiv)}>
        <ul className="ps-0">
          {userProfileNavData?.map((el, index) => {
            return (
              <li key={index} className="pe-1">
                <Link
                  href={el?.slug}
                  className={clsx(
                    "flex justify-between  items-center simpalFont",
                    pathname === el?.slug && styles.active
                  )}
                >
                  {el?.label}
                  {pathname === el?.slug && <RightArrow />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
