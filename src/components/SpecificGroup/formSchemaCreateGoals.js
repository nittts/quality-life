import * as yup from "yup";

const formSchemaCreateGoals = yup.object().shape({
  title: yup.string().required("Meta é obrigatório!"),
  difficulty: yup.string().required("Dificuldade é obrigatório!"),
  });

export default formSchemaCreateGoals;
