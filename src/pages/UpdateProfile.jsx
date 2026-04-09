import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const location = useLocation();
  if (location.pathname === "/updateProfile") {
    document.title = "EcoTrailblazers | Update Profile";
  }

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { manageProfile } = useContext(authContext);

  console.log(name, image);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    setName(name);
    setImage(image);

    manageProfile(name, image)
      .then(() => {
        navigate("/userProfile");
      })
      .catch((err) => {
        console.error("Error updating profile: ", err);
        setError("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="py-5">
      <h3 className="text-center font-semibold text-xl">Update Your Profile</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-gray-600">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-gray-600 font-semibold">
              Photo URL
            </span>
          </label>
          <input
            type="url"
            name="image"
            placeholder="Enter photo URL"
            className="input input-bordered"
            required
          />
        </div>

        {error && <div className="text-red-500 mt-2">{error}</div>}

        <div className="form-control mt-6">
          <button
            className="btn btn-sm bg-primary text-white hover:text-black"
            type="submit"
          >
            Update Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
