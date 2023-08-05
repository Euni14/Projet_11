import Account from "../../components/Account/Account";
import AccountData from "../../assets/AccountData/AccountData.json";
import "./AccountList.css";

function AccountList() {
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      {AccountData.accounts.map((account) => {
        return (
          <Account
            key={account.id}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        );
      })}
    </div>
  );
}

export default AccountList;
