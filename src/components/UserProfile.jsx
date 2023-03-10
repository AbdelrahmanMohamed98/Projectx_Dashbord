import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { userProfileData } from "../data/dummy";
import avatar from "../data/avatar.jpg";
import { Button } from ".";

const UserProfile = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">
          User Profile
        </p>
        <Button
          color="rgb(153,171,180)"
          borderRadius="50%"
          bgHoverColor="light-gray"
          icon={<MdOutlineCancel />}
          size="2xl"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          alt="profile"
          src={avatar}
          className="rounded-full w-24 h-24"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Abdelrahman Ali
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Admin
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            Abdelrahman3@ProjX.com
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, i) => (
          <div
            key={i}
            className="flex gap-5 border-color border-b-1 p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <div
              type="button"
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
              style={{
                color: item.iconColor,
                backgroundColor: item.iconBg,
              }}>
              {item.icon}
            </div>
            <div>
              <p className=" font-semibold dark:text-gray-200">
                {item.title}
              </p>
              <p className="text-gray-500 text-sm  dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          width="full"
          borderRadius="10px"
          text="Logout"
        />
      </div>
    </div>
  );
};

export default UserProfile;
