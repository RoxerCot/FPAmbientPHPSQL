import { Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const RootLayout = () => {
  const { user, dataJSON } = useUserContext();
  console.log(user, dataJSON);
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
