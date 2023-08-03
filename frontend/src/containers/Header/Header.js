import "./Header.css";
import ArgentBankLogo from "../../assets/images/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/Login">
          <i class="fa fa-user-circle fa-fw"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;
