import { Button, Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ProfileNavbar = () => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <>
      <Navbar fluid rounded>
        <div className="flex md:order-2">
          <Button onClick={handleReturnHome}>Regresar a Inicio</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default ProfileNavbar;
