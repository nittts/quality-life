// To do build component
import { Container } from "./style";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useUser } from "../../providers/user";
import { useToken } from "../../providers/token";
import {toast} from "react-toastify";

import api from "../../services/api";


import { useHistory } from "react-router-dom";

import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Profile() {
  const [updateUser, setUpdateUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const {updateToken} = useToken();

  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Verifique o valor digitado!"),
    email: yup.string().email("E-mail inválido!").required("Verifique o valor digitado!"),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitCallback = (data) => {  
    toast.success("Perfil alterado com sucesso!")
    setTimeout(()=>{
      history.push("/login");
      updateToken("");
    }, 2000)
    api
      .patch(`/users/${user.id}/`, data, {
      headers: {
       Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
  }; 

  const { user }  = useUser();
  const { token } = useToken();
 
 const getUserLetters = () => {
   const fullName = user.username.split("");
   const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
   return initials.toUpperCase();
 };
 
  // descomentar quando a funcionalidade de login estiver funcionando e gerando um token do usuário;
      
  return (
    <Container>
      <Avatar
        onMouseOver={() => setUpdateUser(true)}
        onMouseLeave={() => setUpdateUser(false)}
        onClick={() => setOpenModal(true)}
      >
        {updateUser ? <FaUserEdit /> : <> {user && getUserLetters() } </>}
        {/* inciais do usuário */}
      </Avatar>
      <h1>
        Olá,
        <span>{user && user.username}!</span>
      </h1>
      {/* nome do usuário */}
      {openModal && (
        <Modal className="body-form"
          setModalState={setOpenModal}
          modalState={openModal}
          label="Perfil"
        >
          {/* Children da edição de usuário */}

          <form  onSubmit={handleSubmit(submitCallback)}>
            <div className="content-form">
              <Input
                label="Nome"
                type="text"
                name="username"
                placeholder={user.username}
                register={register}
                error={errors.username?.message}
              />

              <Input
                label="Email"
                type="text"
                name="email"
                placeholder={user.email}
                register={register}
                error={errors.email?.message}
              />
              
            </div>

            <div className="footer-form">
              <Button type="submit" success width={211}>
                Salvar
              </Button>
              
            </div>
          </form>
        </Modal>
      )}
    </Container>
  );
}
