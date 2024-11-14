import { Input, InputWrapper } from "./style";

const AuthInput = ({name, placeholder, type, value, onChange}) => {
  return (
    <InputWrapper>
      <Input
        name = {name}
        placeholder = {placeholder}
        type = {type}
        value = {value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

export default AuthInput;