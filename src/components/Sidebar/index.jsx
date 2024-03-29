import React from "react";
import { useState } from "react";
import { Container, Content, Logo } from "./style";
import { useToken } from "../../providers/token";
import { BsGraphUp } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { FaReact } from "react-icons/fa";
import { FiLogOut, FiClipboard } from "react-icons/fi";
import { useHistory } from "react-router-dom";

export default function Sidebar() {
  const [Extends, setExtends] = useState(false);
  const history = useHistory();
  const { updateToken } = useToken();

  const handleExtend = () => {
    setExtends(!Extends);
  };

  const goTo = (location) => {
    history.push(location);
  };

  const logout = () => {
    updateToken("");
    history.push("/");
    localStorage.clear();
  };

  return (
    <Container Extends={Extends}>
      <Logo onClick={handleExtend}>
        <h2>
          {Extends ? (
            <>
              Quality<span>Life</span>
            </>
          ) : (
            <>
              Q<span>L</span>
            </>
          )}
        </h2>
      </Logo>
      <Content Extends={Extends}>
        <li onClick={() => goTo("/dashboard")}>
          <BsGraphUp />
          {Extends ? <h2>Dashboard</h2> : <></>}
        </li>
        <li onClick={() => goTo("/habit")}>
          <FiClipboard />
          {Extends ? <h2>Hábitos</h2> : <></>}
        </li>
        <li onClick={() => history.push("/groups")}>
          <HiUserGroup />
          {Extends ? <h2>Grupos</h2> : <></>}
        </li>
        <li onClick={() => goTo("/about-us")}>
          <FaReact />
          {Extends ? <h2>Sobre Nós</h2> : <></>}
        </li>
        <li onClick={() => logout()}>
          <FiLogOut />
          {Extends ? <h2>Logout</h2> : <></>}
        </li>
      </Content>
    </Container>
  );
}
