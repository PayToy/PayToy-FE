import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput";
import { Title, Wrapper } from "./style";
import { Link } from "react-router-dom";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AuthInput 
        name="email"
        placeholder="email"
        type="email"
        value={email}
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
      <Link to={"/signup"}>회원가입</Link>
    </Wrapper>
  )
}

export default LoginPage;