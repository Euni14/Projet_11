import "./Profile.css";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import AccountList from "../../containers/AccountList/AccountList";

function Profile() {
  return (
    <main class="main bg-dark">
      <ProfileHeader userName="A remplir" />
      <AccountList />
    </main>
  );
}

export default Profile;
