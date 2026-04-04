// import React from 'react';

import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import { useContext, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast, Zoom } from "react-toastify";
import Heading from "./Heading";

const Register = () => {
  const { setUser, registerUser, manageProfile, signInWithGoogle } =
    useContext(authContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const image = e.target.image.value;

    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    registerUser(email, password)
      .then(() => {
        manageProfile(name, image)
          .then(() => {
            const updatedUser = {
              email,
              displayName: name,
              photoURL: image,
            };
            setUser(updatedUser);
            navigate("/");
          })
          .catch((err) => {
            setError("Profile update failed. Please try again.");
            console.error(err);
          });
      })
      .catch((err) => {
        setError("Registration failed. Please try again.");
        console.error(err);
      });
  };

  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      });
  };
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <Heading title={"Registration Form"} />
          <div className="card bg-base-100 w-full max-w-5xl shrink-0 shadow-2xl">
            <form
              onSubmit={handleSubmit}
              className="card-body w-96 lg:w-[500px]"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-gray-600">
                    Name
                  </span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600  font-semibold">
                    Email
                  </span>
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
                  <span className="label-text text-gray-600  font-semibold">
                    Photo Url
                  </span>
                </label>
                <input
                  type="photoUrl"
                  name="image"
                  placeholder="photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-600  font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {error && <p className="text-red-900">{error}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-sm hover:text-black bg-primary text-white font-normal">
                  Register
                </button>
              </div>
              <h2 className="text-sm mt-3 flex items-center gap-2">
                Already have an account?
                <Link to="/login">
                  <span className=" flex items-center gap-2 text-primary active text-base font-extrabold">
                    <FaLongArrowAltRight />
                    Log in
                  </span>
                </Link>
              </h2>
            </form>
            <div className="divider text-primary font-semibold">OR</div>
            <div className="space-y-4">
              <button
                onClick={handleGoogleLogIn}
                className="pb-8 w-full flex items-center justify-center gap-2"
              >
                <img src={googleLogo} alt="Google" className="w-6 h-6" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
