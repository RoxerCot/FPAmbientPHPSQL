import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="h-screen bg-cover bg-no-repeat bg-[url(../images/RegisterBackground.jpg)] ">
      <div className="h-screen flex items-center justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};
export default Register;
