import { useState } from "react";
import { AccountBalance, AccountNumber, BoardWrapper, ButtonWrapper, HeaderWrapper, Input, InputWrapper, Title, Wrapper } from "./style.js";
import { Button } from "../../components/Account/style.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const DepositPage = () => {
  const params = useParams(); // account_id 추출 시 사용 params.id
  const navigate = useNavigate();
  const location = useLocation();
  const {accountNumber, Balance} = location.state || {};
  const [balance, setBalance] = useState("");

  const handleData = (e) => {
    if (e.target.name === "balance") {
      setBalance(e.target.value);
    }
  };

  const onSubmit = () => {
    // deposit;
    alert("입금되었습니다.");
    navigate('/main');
  }

  const moveToMain = () => {
    navigate('/main');
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>PayToy</Title>
      </HeaderWrapper>
      <BoardWrapper>
        <AccountNumber>계좌 번호 : {accountNumber}</AccountNumber>
        <AccountBalance>잔액 : {Balance}</AccountBalance>
        <InputWrapper>
          <Input 
            name="balance"
            placeholder="입금금액"
            type="text"
            value={balance}
            onChange={handleData}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button onClick={onSubmit}>입금하기</Button>
          <Button onClick={moveToMain}>취소하기</Button>
        </ButtonWrapper>
      </BoardWrapper>
    </Wrapper>
  )
}

export default DepositPage;