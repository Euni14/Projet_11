import "./ProfileHeader.css";

function ProfileHeader({ userName }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default ProfileHeader;
