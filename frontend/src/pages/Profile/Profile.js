import "./Profile.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import AccountList from "../../containers/AccountList/AccountList";
import { useSelector } from "react-redux";
import EditForm from "../../components/EditForm/EditForm";

function Profile() {
  const { userName, isEditMode } = useSelector((state) => state.user);

  return (
    <main className="main bg-dark">
      {!isEditMode && <ProfileHeader userName={userName} />}
      {isEditMode && <EditForm />}
      <AccountList />
    </main>
  );
}

export default Profile;
