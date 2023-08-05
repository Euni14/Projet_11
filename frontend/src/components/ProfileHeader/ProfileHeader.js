import "./ProfileHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsEditMode } from "../../Features/User/userSlice";

function ProfileHeader({ userName }) {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button
        className="edit-button"
        onClick={(e) => dispatch(setIsEditMode(true))}
      >
        Edit Name
      </button>
    </div>
  );
}

export default ProfileHeader;
