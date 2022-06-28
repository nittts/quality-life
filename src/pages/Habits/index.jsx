import { Switch, Route } from "react-router-dom";
import { Container, Content, HabitsContainer } from "./style";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import List from "../../components/List";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
// import Habit from "../../components/Habit";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";

export default function Habits() {
  const history = useHistory();
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
              <Button onClick={() => setCreateModal(true)}>Criar Hábito</Button>
              <List label={"Hábitos"}>
                <Card
                  icon={
                    <FiCheckCircle
                      onClick={() => console.log("habito completo")}
                    />
                  }
                  goTo="habit"
                  id="1234"
                  isCompleted={false}
                >
                  <h1>Habito</h1>
                  {/* criar a estrutura do hábito especifico */}
                </Card>
              </List>
            </HabitsContainer>
          </Content>

          {createModal && (
            <Modal
              setModalState={setCreateModal}
              modalState={createModal}
              label="Criar hábito"
            >
              <h1>create habit modal</h1>
              {/* criar a estrutura do modal de criar hábito */}
              <Button success>Criar Hábito</Button>
            </Modal>
          )}
        </Container>
      </Route>
    </Switch>
  );
}
