import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Features/Authentication/authenticationActions";
import { useEffect } from "react";
import Error from "../../components/Error/Error";

function Login() {
  const { userToken, error, loading } = useSelector(
    (state) => state.authentication
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken) {
      navigate("/profile");
    }
  }, [navigate, userToken]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="email" {...register("email")} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button type="submit" className="sign-in-button" disabled={loading}>
            {loading ? "Login in progress" : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
