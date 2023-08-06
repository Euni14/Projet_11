import "./Account.css";
import { useSelector } from "react-redux";

function Account({ title, amount, description }) {
  const { isEditMode } = useSelector((state) => state.user);
  return (
    <section className={isEditMode ? "account editMode" : "account"}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        {isEditMode && <i className="fa fa-chevron-right fa-3x"></i>}
        {!isEditMode && (
          <button className="transaction-button">View transactions</button>
        )}
      </div>
    </section>
  );
}

export default Account;
