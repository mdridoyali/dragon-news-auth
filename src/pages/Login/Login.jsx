import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signInUser(email, password)
    .then(res => {
        console.log(res.user)
        navigate(location?.state ? location.state : '/' )
    })
    .catch(error => console.log(error))

  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-5 font-semibold text-center">Please Login</h2>
      <div>
        <form
          onSubmit={handleLogin}
          className=" w-11/12 md:w-2/3 lg:w-1/3 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Don't have an account please{" "}
          <Link
            className="text-blue-600 underline font-semibold "
            to={"/register"}
          >
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
