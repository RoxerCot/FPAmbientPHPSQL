import { Outlet } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import ProfileSidebar from "../components/ProfileSidebar";

const ProfileLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen rounded-none ">
        <div>
          <ProfileSidebar className="rounded-none " />
        </div>
        <div className="flex flex-col w-screen rounded-none ">
          <ProfileNavbar />

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default ProfileLayout;
