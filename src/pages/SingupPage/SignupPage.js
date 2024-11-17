import { useState } from "react";
import AuthInput from "../../components/AuthInput/AuthInput.js";
import { CheckDuplicate, Title } from "./style.js";
import { Wrapper } from "../LoginPage/style.js";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../../components/AuthButton/AuthButton.js";
import { validateUser } from "../../utils/validator.js";
import { checkTel } from "../../api/AuthAPI.js";

const SignupPage = () => {
  const navigate = useNavigate();
  const [isTelChecked, setIsTelChecked] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    tel: '',
    password: '',
    passwordConfirm: '',
  })

  const handleData = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name] : value,
    });

    if(name === 'tel'){
      setIsTelChecked(false); // 전화번호가 변경되면 중복 검사 초기화
    }
  }

  const handleSubmit = () => {
    const error = validateUser(formData);
    if(Object.keys(error).length > 0){
      alert(Object.values(error).join('\n'));
    } else if (!isTelChecked) {
      alert("전화번호 중복 검사를 완료해 주세요.");
    } else {
      // 회원가입 추가 로직
      navigate('/');
      alert("회원가입 성공!");
    }
  }

  const handleDuplicateCheck = async () => {
    const {tel} = formData;
    if(!tel) {
      alert("전화번호를 입력해 주세요");
      return;
    }
    try {
      const response = await checkTel(tel);
      if(response.message === "전화번호가 중복됩니다.") {
        setIsTelChecked(false);
      } else {
        setIsTelChecked(true);
      }
    } catch (error) {
      console.log("중복 검사 실패", error);
    }
  }

  return (
    <Wrapper>
      <Title>PayToy</Title>
      <AuthInput
        name="username"
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
      <CheckDuplicate onClick={handleDuplicateCheck}>중복검사</CheckDuplicate>
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
        value={formData.passwordConfirm}
        onChange={handleData}
      />
      <AuthButton title="회원가입" onClick={handleSubmit}/>
      <Link to={"/"}>로그인</Link>
    </Wrapper>


  )
}

export default SignupPage;