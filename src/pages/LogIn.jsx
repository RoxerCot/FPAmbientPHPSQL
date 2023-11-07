import LoginForm from "../components/LoginForm";

const LogIn = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url(../images/LoginBackground.jpg)] ">
      <div className="h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};
export default LogIn;
