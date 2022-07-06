import * as yup from "yup";

const formSchemaCreateActivity = yup.object().shape({
  title: yup.string().required("Título é obrigatório!"),
});

export default formSchemaCreateActivity;
