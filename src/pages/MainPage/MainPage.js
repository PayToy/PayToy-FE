
import Account from "../../components/Account/Account.js";
import MainHeader from "../../components/MainHeader/MainHeader.js";
import { Wrapper } from "./style.js";

const MainPage = () => {
  return (
    <Wrapper>
      <MainHeader />
      <Account />
    </Wrapper>
  )
}

export default MainPage;