import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const URL = "http://localhost/BackEnd2/Interface.php";

const HomeNavbar = () => {
  const { user, ready, sesion } = useUserContext();
  const navigate = useNavigate();
  var avatarimg = "";

  if (ready) {
    avatarimg =
      sesion && user
        ? "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        : "";
  }
  const handleLogin = () => {
    navigate("/sesion/login");
  };
  const handleLogout = async () => {
    try {
      var data = new FormData();
      data.append("usuario", JSON.parse(localStorage.getItem("Usuario")));
      data.append("METHOD", "LOGOUT");
      localStorage.setItem("Usuario", null);
      logOut(URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
  };

  // console.log(avatarimg, ready, user, sesion);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={avatarimg} rounded />}
        >
          {ready ? (
            user && sesion ? (
              <>
                <Dropdown.Header>
                  <span className="block text-sm">Bonnie Green</span>
                  <span className="block truncate text-sm font-medium">
                    name@hsl.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item>Perfil</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
                  Cerrar sesion
                </Dropdown.Item>
              </>
            ) : (
              <>
                <Dropdown.Item onClick={handleLogin}>
                  Iniciar sesion
                </Dropdown.Item>
              </>
            )
          ) : (
            <>
              <p>Loading....</p>
            </>
          )}
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/us"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Servicios
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Conactanos
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default HomeNavbar;
