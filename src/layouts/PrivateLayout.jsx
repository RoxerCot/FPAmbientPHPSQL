import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateLayout = () => {
  const { user, ready } = useUserContext();
  console.log(user, ready);

  return (
    <>
      {ready ? (
        <>{user ? <Outlet /> : <Navigate to="/" />}</>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default PrivateLayout;
