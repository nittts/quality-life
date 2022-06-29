import * as yup from "yup";

const formSchema = yup.object().shape({
  title: yup.string().required("Este é um Campo Obrigatório"),
  category: yup.string().required("Este é um Campo Obrigatório"),
  difficulty: yup.string().required("Este é um Campo Obrigatório"),
  frequency: yup.string().required("Este é um Campo Obrigatório"),
});

export default formSchema;
