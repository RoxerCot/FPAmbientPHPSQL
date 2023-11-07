import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Banner,
} from "flowbite-react";
import { HiArrowRight, HiX } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { GiArchiveRegister } from "react-icons/gi";
import { useRef } from "react";
const URL = "http://localhost/BackEnd2/Interface.php";

const LoginForm = () => {
  const navigate = useNavigate();
  const refEmail = useRef(null);
  const refPswd = useRef(null);
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/");

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = new FormData();
    data.append("usuario", refEmail.current.value);
    data.append("password", refPswd.current.value);
    data.append("METHOD", "LOGIN");
    console.log(data);
    localStorage.setItem("Usuario", JSON.stringify(refEmail.current.value));
    logIn(URL, data);
  };

  const logIn = async (url, data) => {
    const resp = await fetch(url, {
      method: "POST",
      body: data,
    }).then(() => navigate(0));
    console.log(resp);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <Card className="h-1/2 w-1/4">
      <form className="flex max-w-md h-full flex-col gap-4">
        <div className="flex justify-center items-center flex-col">
          <Button onClick={handleHome} className="w-1/6 self-start mb-4">
            <AiFillHome />
          </Button>
          <h1 className="mb-2">Bienvenido</h1>
          <div className="self-start mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            className="w-full"
            id="email"
            type="email"
            placeholder="example@hsl.com"
            ref={refEmail}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Contraseña" />
          </div>
          <TextInput id="password" type="password" ref={refPswd} />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            Recordar cuenta
          </Label>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Iniciar sesion
        </Button>
      </form>
      <Banner>
        <div className="flex w-full justify-between border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 p-1 dark:bg-gray-600">
                <GiArchiveRegister className="h-4 w-4" />
              </span>
              <span className="[&_p]:inline">
                ¿No tienes cuenta?..
                <Link
                  to="/sesion/register"
                  className="ml-0 flex items-center text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-1 md:inline-flex"
                >
                  Registrate Aqui
                  <HiArrowRight className="ml-2" />
                </Link>
              </span>
            </p>
          </div>
          <Banner.CollapseButton
            color="gray"
            className="border-0 bg-transparent text-gray-500 dark:text-gray-400"
          >
            <HiX className="h-4 w-4" />
          </Banner.CollapseButton>
        </div>
      </Banner>
    </Card>
  );
};
export default LoginForm;
