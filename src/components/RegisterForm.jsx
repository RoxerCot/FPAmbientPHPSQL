import { Button, Card, Label, TextInput } from "flowbite-react";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { useRef } from "react";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
const URL = "http://localhost/BackEnd2/Interface.php";

const RegisterForm = () => {
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const navigate = useNavigate();
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("usuario", refEmail.current.value);
    data.append("password", refPswd.current.value);
    data.append("METHOD", "REGISTER");
    console.log(data);
    localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
    register(URL, data);
  };

  const register = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
    console.log(resp);
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleBackLogin = () => {
    navigate("/sesion/login");
  };

  return (
    <Card className="h-1/2 w-1/4">
      <form
        className="flex max-w-md h-full flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-row w-full justify-between">
            <Button onClick={handleHome} className="w-1/6  mb-4 ">
              <AiFillHome />
            </Button>
            <Button onClick={handleBackLogin} className="w-1/6  mb-4 ">
              <BiLogIn />
            </Button>
          </div>
          <h1 className="mb-2">Registro</h1>
          <div className="self-start mb-2 block">
            <Label htmlFor="email2" value="Email" />
          </div>
          <TextInput
            className="w-full"
            id="email2"
            type="email"
            placeholder="example@hsl.com"
            ref={refEmail}
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Contraseña" />
          </div>
          <TextInput
            className="mb-6"
            id="password"
            type="password"
            ref={refPswd}
            required
            shadow
          />
        </div>
        <Button type="submit">Resgistrar</Button>
      </form>
    </Card>
  );
};
export default RegisterForm;
