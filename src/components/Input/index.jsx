import { Container, InputContainer } from "./style";

function Input({ label, icon: Icon, register, name, error, ...rest }){
  return (
    <Container> 
    <div>
      {label}
    </div>
    <InputContainer isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input {...register(name)} {...rest} />
    </InputContainer>
    <div>
      {!!error && <span> - {error}</span>}
    </div>
  </Container>
);  
}

export default Input;

