import { Switch, Route } from "react-router-dom";
import { Container, ProfileContainer, Content, Header } from "./style";
import { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
import List from "../../components/List";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Habit from "../../components/Habit";
import api from "../../services/api";
import Input from "../../components/Input";
import { useToken } from "../../providers/token";
import { FiCheckCircle } from "react-icons/fi";
import { useUser } from "../../providers/user";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import formSchema from "./FormSchema";

// components
import Sidebar from "../../components/Sidebar";
import GroupsCard from "../../components/Groups";
import Profile from "../../components/Profile";
// import GroupsCard from "../../components/Groups";

export default function Groups() {
  return (
    <>
      <Header>
        <Profile />
      </Header>
      <Container>
        <Sidebar />
        <Content>
          <GroupsCard />
        </Content>
      </Container>
    </>
  );
}
