import * as yup from "yup";

const formSchemaNewGroup = yup.object().shape({
  name: yup.string().required("Nome é obrigatório!"),
  description: yup.string().required("Descrição é obrigatório!"),
  category: yup.string().required("Categoria é obrigatório!"),
});

export default formSchemaNewGroup;
