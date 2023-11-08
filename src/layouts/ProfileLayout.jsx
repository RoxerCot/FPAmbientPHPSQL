import { Outlet } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import ProfileSidebar from "../components/ProfileSidebar";

const ProfileLayout = () => {
  return (
    <>
      <div className="flex h-screen ">
        <div className="">
          <ProfileSidebar />
        </div>
        <div className="flex flex-col w-screen ">
          <ProfileNavbar />

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default ProfileLayout;
