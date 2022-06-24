import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .required("Verifique seu nome de usuário!")
    .min(3, "Mínimo de 3 caracteres!"),
  email: yup
    .string()
    .required("Verifique seu e-mail!")
    .email("Insira um e-mail válido!"),
  password: yup
    .string()
    .required("Verifique a senha digitada!")
    .min(6, "Mínimo de 6 caracteres!"),
  passwordConfirm: yup
    .string()
    .required("Confirme a sua senha!")
    .oneOf([yup.ref("password")], "As senhas não conferem!"),
});

export default formSchema;
