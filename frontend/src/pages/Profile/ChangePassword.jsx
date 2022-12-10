import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { changePassword } from "../../features/auth/authSlice";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const dispatch = useDispatch();

  const { user, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [message, isError]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (newPassword !== confPassword) {
      toast.error("Passwords do not match");
    } else {
      const email = user.email;
      dispatch(changePassword({ email, oldPassword, newPassword }));
    }
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password</label>
          <input
            placeholder="Enter old password"
            type="password"
            name="oldPassword"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            placeholder="Enter new password"
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confPassword">Confirm new Password</label>
          <input
            placeholder="Confirm new password"
            type="password"
            name="confPassword"
            id="confPassword"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
