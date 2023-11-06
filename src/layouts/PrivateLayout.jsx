import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const PrivateLayout = () => {
  const { user, ready, sesion } = useUserContext();
  console.log(user, ready, sesion);

  return (
    <>
      {ready ? (
        <>{sesion && user ? <Outlet /> : <Navigate to="/" />}</>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};

export default PrivateLayout;
