import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput.js";
import { Title, Wrapper } from "./style.js";
import { Link } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton.js";


const LoginPage = () => {
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (e) => {
    if (e.target.name === "tel") {
      setTel(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AuthInput 
        name="tel"
        placeholder="tel"
        type="tel"
        value={tel}
        onChange={handleData} 
        required
      />
      <AuthInput
        name="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={handleData}
        required
      />
      <AuthButton title = "로그인"/>
      <Link to={"/signup"}>회원가입</Link>

    </Wrapper>
  )
}

export default LoginPage;