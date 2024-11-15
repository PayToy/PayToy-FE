import { AccountButton, Title, Wrapper } from "./style.js"

const MainHeader = ({onClick}) => {
  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AccountButton onClick={() => onClick()}>계좌 생성</AccountButton>
    </Wrapper>
  )
}

export default MainHeader;