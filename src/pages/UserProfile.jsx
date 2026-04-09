import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import { useLocation } from "react-router-dom";
import "animate.css";
import Heading from "../components/Heading";
import UpdateProfile from "./UpdateProfile";

const UserProfile = () => {
  const location = useLocation();
  if (location.pathname === "/userProfile") {
    document.title = "EcoTrailblazers | User Profile";
  }

  const { user } = useContext(authContext);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-10 bg-green-50">
      <Heading title={"User Profile"} />
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-xl md:text-3xl text-gray-600">
          <i>Welcome</i> {user.displayName || "User"}!
        </h2>
        <div
          className="flex flex-col items-center shadow-lg shadow-primary rounded-2xl
         py-20 w-full max-w-xl bg-white relative"
        >
          <button
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaEdit />
          </button>
          <div className="flex justify-center mb-6">
            <img
              src={user.photoURL || "no photo"}
              alt="Profile"
              className="ring-4 ring-offset-8 ring-primary w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700">
              Email: <span className="font-semibold">{user.email}</span>
            </p>
            <p className="text-lg text-gray-700">
              Name:{" "}
              <span className="font-semibold">
                {user.displayName || "No Name Set"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <UpdateProfile />
        </div>
      </dialog>
    </div>
  );
};

export default UserProfile;
