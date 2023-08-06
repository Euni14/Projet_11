import "./EditForm.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../../Features/User/userActions";
import { useEffect } from "react";
import Error from "../Error/Error";
import { setIsEditMode, setUserName } from "../../Features/User/userSlice";

function EditForm() {
  const { userName, firstName, lastName, error, isEditMode, loading } =
    useSelector((state) => state.user);
  const { userToken } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken == null) {
      navigate("/login");
    }
  }, [navigate, userToken]);

  const submitForm = (data) => {
    dispatch(updateUserName(data));
    dispatch(setUserName(data));
    dispatch(setIsEditMode(false));
  };
  return (
    <main className={isEditMode ? "main" : "main bg-dark"}>
      <section className="sign-in-content">
        <h1>Edit user info</h1>
        {error && <Error>{error}</Error>}

        <form onSubmit={handleSubmit(submitForm)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="userName"
              defaultValue={userName}
              {...register("userName")}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              defaultValue={firstName}
              disabled="disabled"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              defaultValue={lastName}
              disabled="disabled"
            />
          </div>
          <div className="buttons">
            <button type="submit" className="sign-in-button" disabled={loading}>
              {loading ? "Save in progress" : "Save"}
            </button>
            <button
              type="button"
              className="sign-in-button"
              onClick={() => dispatch(setIsEditMode(false))}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default EditForm;
