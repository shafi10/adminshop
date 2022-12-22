import React, { Fragment } from "react";
import "./css/sidebar.css";
import { subSideNav } from "../../../settings/site_settings";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setsideBarSubLable, setsideBarLable } from "../../../feature/uiSlice";

const Sidebar: React.FC = () => {
  const { sideBarLable, sideBarSubLable } = useSelector(
    (state: RootState) => state.uislice
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sideBarClick = (item: any) => {
    dispatch(setsideBarSubLable(""));
    if (item?.label === sideBarLable) {
      return dispatch(setsideBarLable(""));
    }
    if (item?.children) {
      dispatch(setsideBarLable(item?.label));
    } else {
      dispatch(setsideBarLable(item?.label));
      navigate(item.slug);
    }
  };

  const sideBarSubItemClick = (data: any) => {
    dispatch(setsideBarSubLable(data?.label));
    navigate(data?.slug);
  };
  return (
    <div className="sidebar">
      {subSideNav?.map((item) => (
        <Fragment key={item?.id}>
          <div
            className={
              sideBarLable === item?.label && !item?.children
                ? "side_item sidebar_active"
                : "side_item"
            }
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
              {item?.children?.map((data, index) => (
                <div
                  className={
                    sideBarSubLable === data?.label
                      ? "sidebar_sub_item sidebar_sub_active"
                      : "sidebar_sub_item"
                  }
                  key={index}
                  onClick={() => sideBarSubItemClick(data)}
                >
                  {data?.label}
                </div>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
