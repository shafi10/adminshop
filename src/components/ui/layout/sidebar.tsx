import React, { useState } from "react";
import "./css/sidebar.css";
import { subSideNav } from "../../../settings/site_settings";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [sideBarLable, setSideBarLable] = useState("");
  const [sideBarSubLable, setSideBarSubLable] = useState("");
  const navigate = useNavigate();
  const sideBarClick = (item: any) => {
    setSideBarSubLable("");
    if (item?.label === sideBarLable) {
      return setSideBarLable("");
    }
    if (item?.children) {
      setSideBarLable(item?.label);
    } else {
      setSideBarLable(item?.label);
      navigate(item.slug);
    }
  };

  const sideBarSubItemClick = (data: any) => {
    setSideBarSubLable(data?.label);
    navigate(data?.slug);
  };
  return (
    <div className="sidebar">
      {subSideNav?.map((item) => (
        <>
          <div
            className={
              sideBarLable === item?.label && !item?.children
                ? "side_item sidebar_active"
                : "side_item"
            }
            key={item?.id}
            onClick={() => sideBarClick(item)}
          >
            <div className="side_label">
              <HiTemplate />
              <span className="side_label_item">{item?.label}</span>
            </div>
            {item?.children && (
              <span>
                {sideBarLable === item?.label ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </span>
            )}
          </div>
          {sideBarLable === item?.label && (
            <div className="sidebar_sub">
              {item?.children?.map((data) => (
                <div
                  className={
                    sideBarSubLable === data?.label
                      ? "sidebar_sub_item sidebar_sub_active"
                      : "sidebar_sub_item"
                  }
                  key={data?.label}
                  onClick={() => sideBarSubItemClick(data)}
                >
                  {data?.label}
                </div>
              ))}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Sidebar;
