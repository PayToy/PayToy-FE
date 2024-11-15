import Account from "../Account/Account.js";
import { Wrapper } from "./style.js";


const AccountList = () => {
  const mockData = [
    {
      account_id : 1,
      accountNumber : "100279974808",
      Balance: "4000",
    },
    {
      account_id : 2,
      accountNumber : "100279974807",
      Balance: 9000,
      }
  ]

  return (
    <Wrapper>
      {mockData.map((account => <Account key={account.account_id} {...account} />))}
    </Wrapper>
  )
}

export default AccountList;