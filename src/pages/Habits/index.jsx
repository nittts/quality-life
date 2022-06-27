import { Switch, Route } from "react-router-dom";
import { Container, Content, HabitsContainer, HabitCircle } from "./style";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import List from "../../components/List";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
// import Habit from "../../components/Habit";
import { BsThreeDots } from "react-icons/bs";

export default function Habits() {
  const [openModal, setOpenModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  return (
    <Switch>
      <Route path="/habit/:habit_id">
        <h1>Habito especifico</h1>
      </Route>
      <Route path={"/"}>
        <Container>
          <Sidebar />
          <Content>
            <HabitsContainer>
              <Button primary onClick={() => setCreateModal(true)}>
                Criar Hábito
              </Button>
              <List label={"Hábitos"}>
                <Card
                  icon={<BsThreeDots onClick={() => setOpenModal(true)} />}
                  goTo="habit"
                  id="1234"
                >
                  <h1>Habito</h1>
                  {/* criar a estrutura do hábito especifico */}
                </Card>
              </List>
            </HabitsContainer>
          </Content>
        </Container>

        {openModal && (
          <Modal
            setModalState={setOpenModal}
            modalState={openModal}
            label="Editar Hábito"
          >
            <h1>edit modal</h1>
            {/* criar a estrutura do modal de editar hábito */}
            <Button success>Salvar Alterações</Button>
            <Button negative>Remover Hábito</Button>
          </Modal>
        )}

        {createModal && (
          <Modal
            setModalState={setCreateModal}
            modalState={createModal}
            label="Criar hábito"
          >
            <h1>edit modal</h1>
            {/* criar a estrutura do modal de criar hábito */}
            <Button success>Criar Hábito</Button>
          </Modal>
        )}
      </Route>
    </Switch>
  );
}
