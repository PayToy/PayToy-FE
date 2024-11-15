import { AccountNumber, AccountBalance, Button, ButtonWrapper, Wrapper } from "./style.js"

const Account = ({accountNumber, balance}) => {
  
  const parseInt = (balance) => {
    return Number(balance).toLocaleString();
  }
  return (
    <Wrapper>
      <AccountNumber>계좌번호 : {accountNumber}</AccountNumber>
      <AccountBalance>{parseInt(balance)} 원</AccountBalance>
      <ButtonWrapper>
        <Button>입금하기</Button>
        <Button>송금하기</Button>
        <Button>출금하기</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Account;