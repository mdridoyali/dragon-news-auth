import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext} from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);
console.log(user)
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(name, photo, email, password);

    //  create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl my-5 font-semibold text-center">
        Please Register
      </h2>
      <div>
        <form
          onSubmit={handleRegister}
          className=" w-11/12 md:w-2/3 lg:w-1/3 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-3">
          Already have an account please{" "}
          <Link
            className="text-blue-600 underline font-semibold "
            to={"/login"}
          >
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
