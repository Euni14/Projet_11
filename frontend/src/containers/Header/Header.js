import "./Header.css";
import ArgentBankLogo from "../../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserProfileMutation } from "../../services/user/userService";
import { setUserProfile, initUserProfile } from "../../Features/User/userSlice";
import { logout } from "../../Features/Authentication/authenticationSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const { userName } = useSelector((state) => state.user);
  const { userToken } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userProfile] = useUserProfileMutation();
  useEffect(() => {
    if (userToken || localStorage.getItem("userToken")) {
      const asyncFn = async () => {
        const payload = await userProfile().unwrap();
        dispatch(setUserProfile(payload));
      };
      asyncFn();
    } else {
      navigate("/");
    }
  }, [userToken, dispatch, userProfile, navigate]);
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userToken && (
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
        )}
        {userToken && (
          <Link
            className="main-nav-item"
            onClick={() => {
              dispatch(logout());
              dispatch(initUserProfile());
            }}
            to="/"
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
        {userToken == null && (
          <Link className="main-nav-item" to="/Login">
            <i className="fa fa-user-circle fa-fw"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
