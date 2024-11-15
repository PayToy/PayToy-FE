import { AccountNumber, AccountProperty, Button, ButtonWrapper, Wrapper } from "./style.js"

const Account = ({accountNumber, property}) => {
  
  const parseInt = (property) => {
    return Number(property).toLocaleString();
  }
  return (
    <Wrapper>
      <AccountNumber>계좌번호 : {accountNumber}</AccountNumber>
      <AccountProperty>{parseInt(property)} 원</AccountProperty>
      <ButtonWrapper>
        <Button>입금하기</Button>
        <Button>송금하기</Button>
        <Button>출금하기</Button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Account;