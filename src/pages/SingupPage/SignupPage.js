import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput.js";
import { Title } from "./style.js";
import { Wrapper } from "../LoginPage/style.js";
import { Link } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton.js";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    tel: '',
    password: '',
  })
  const handleData = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name] : value,
    })
  }

  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AuthInput
        name="name"
        placeholder="name"
        type="text"
        value={formData.username}
        onChange={handleData}
      />
      <AuthInput
        name="tel"
        placeholder="tel"
        type="tel"
        value={formData.tel}
        onChange={handleData}
      />
      <AuthInput
        name="password"
        placeholder="At least 6 characters"
        type="password"
        value={formData.password}
        onChange={handleData}
      />
      <AuthInput
        name="passwordConfirm"
        placeholder="Re-enter password"
        type="Password"
        value={formData.username}
        onChange={handleData}
      />
      <AuthButton title="회원가입" />
      <Link to={"/"}>로그인</Link>
    </Wrapper>


  )
}

export default SignupPage;