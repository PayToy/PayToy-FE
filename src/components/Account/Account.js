import { useNavigate } from "react-router-dom";
import { AccountNumber, AccountBalance, Button, ButtonWrapper, Wrapper } from "./style.js"

const Account = ({account_id, accountNumber, Balance}) => {
  
  const navigate = useNavigate();

  const formatBalance = (Balance) => {
    console.log(Balance);
    return Number(Balance).toLocaleString();
  }
  const handleRemittance = () => {
    navigate(`/remittance/${account_id}`, {state : {accountNumber, Balance}});
  }

  const handleDeposit = () => {
    navigate(`/deposit/${account_id}`, {state : {accountNumber, Balance}});
  }

  const handleWithdrawal = () => {
    navigate(`/withdrawal/${account_id}`, {state: {accountNumber, Balance}});
  }

  return (
    <Wrapper>
      <AccountNumber>계좌번호 : {accountNumber}</AccountNumber>
      <AccountBalance>{formatBalance(Balance)} 원</AccountBalance>
      <ButtonWrapper>
        <Button onClick={handleDeposit}>입금하기</Button>
        <Button onClick={handleRemittance}>송금하기</Button>
        <Button onClick={handleWithdrawal}>출금하기</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Account;