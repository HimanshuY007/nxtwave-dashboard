import { useState } from "react";
import Banner from "../components/resource_form/Banner";
import { useLoginContext } from "../context/LoginContextProvider";

const loginValidation = (values) => {
  const error = {};
  if (!values.number.length) {
    error.number = "Please enter your number";
  } else if (values.number.length !== 10) {
    error.number = "Must have to be a 10 digit number";
  }
  if (!values.password.length) {
    error.password = "Please enter the password";
  } else if (values.password.length < 8) {
    error.password = "Atleast 8 characters";
  }
  return error;
};

const Login = () => {
  const [values, setValues] = useState({ number: "", password: "" });
  const [errors, setErrors] = useState({});
  const { setLogin } = useLoginContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = loginValidation(values);
    if (Object.keys(error).length !== 0) {
      setErrors(error);
      return;
    } else {
      setErrors({});
      setLogin(true);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-24">
      <div className="">
        <img src="/nxtwave_logo.svg" alt="Logo" className="w-32" />
      </div>
      <div className="lg:w-1/3 md:2/5 p-8 flex flex-col justify-center bg-white rounded-lg shadow-lg shadow-gray-600">
        <div>
          <h1 className="text-[32px] font-medium text-center text-[#171F46]">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              <label className="text-[#60656c] font-semibold text-sm">
                MOBILE NO:
              </label>
              <input
                className="mobile-no w-full px-4 py-2 mt-2 outline-none border border-[#D7DFE9] rounded bg-transparent"
                type="number"
                value={values.number}
                placeholder="Enter mobile no."
                inputMode="numeric"
                onChange={(e) => {
                  setValues({ ...values, number: e.target.value });
                }}
              />
              {errors.number && (
                <p className="pt-1 text-red-400">{errors.number}</p>
              )}
            </div>
            <div className="mt-8">
              <label className="text-[#60656c] font-semibold text-sm">
                PASSWORD
              </label>
              <input
                className="w-full px-4 py-2 mt-2 outline-none border border-[#D7DFE9] rounded bg-transparent"
                type="password"
                value={values.password}
                placeholder="Enter password"
                onChange={(e) => {
                  setValues({ ...values, password: e.target.value });
                }}
              />
              {errors.password && (
                <p className="pt-1 text-red-400">{errors.password}</p>
              )}
            </div>
            <div className="mt-8 text-center">
              <button className="px-4 py-2 text-white text-sm bg-[#0B69FF] rounded">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
