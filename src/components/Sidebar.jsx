import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import logox from "../data/logox.png";
const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    currentColor,
  } = useStateContext();

  const handleCloseSideBar = () => {
    if (
      activeMenu !== undefined &&
      screenSize <= 900
    ) {
      setActiveMenu(false);
    }
  };
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="items-center flex justify-between">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-2 mr-4 mt-4 flex text-3xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <span
                style={{ color: currentColor }}
                className="font-black font-m">
                PROJECT
              </span>
              <img
                src={logox}
                alt="projectX"
                className="items-center"
              />{" "}
            </Link>
            <TooltipComponent
              content="Menu"
              position="BottomCenter">
              <button
                type="button"
                style={{ color: currentColor }}
                onClick={() =>
                  setActiveMenu(
                    (prevActiveMenu) =>
                      !prevActiveMenu
                  )
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden
                ">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive
                        ? currentColor
                        : "",
                    })}
                    className={({ isActive }) =>
                      isActive
                        ? activeLink
                        : normalLink
                    }>
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
