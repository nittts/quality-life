// To do build component
import { Container } from "./style";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useUser } from "../../providers/user";
import { useToken } from "../../providers/token";
import Modal from "../Modal";

export default function Profile() {
  const [updateUser, setUpdateUser] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  //const { user, getUser() }  = useUser();
  //const { token } = useToken();

  //   const fullName = user.username.split("");
  //   const getUserLetters = () => {
  //     const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  //     return initials.toUpperCase();
  //   };

  //   useEffect(() => {
  // getUser(token);
  //   }, []);
  //

  // descomentar quando a funcionalidade de login estiver funcionando e gerando um token do usuário;

  return (
    <Container>
      <Avatar
        onMouseOver={() => setUpdateUser(true)}
        onMouseLeave={() => setUpdateUser(false)}
        onClick={() => setOpenModal(true)}
      >
        {updateUser ? <FaUserEdit /> : <> WB{/*user && getUserLetters() */} </>}
        {/* inciais do usuário */}
      </Avatar>
      <h1>
        Olá,
        <span> William Baierle Charqueiro{/*user && user.username*/}!</span>
      </h1>
      {/* nome do usuário */}
      {openModal && (
        <Modal
          setModalState={setOpenModal}
          modalState={openModal}
          label="Perfil"
        >
          {/* Children da edição de usuário */}
        </Modal>
      )}
    </Container>
  );
}
