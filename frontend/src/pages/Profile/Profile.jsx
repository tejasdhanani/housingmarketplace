import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <div>Profile</div>
      <Link to="/profile/changepassword" className="btn btn-half">
        Change Password
      </Link>
      <Outlet />
    </>
  );
}

export default Profile;
