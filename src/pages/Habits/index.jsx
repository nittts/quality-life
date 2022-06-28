import { Switch, Route } from "react-router-dom";
import { Container, Content, HabitsContainer } from "./style";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import List from "../../components/List";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import Habit from "../../components/Habit";
import { FiCheckCircle } from "react-icons/fi";
import api from "../../services/api";
import { useToken } from "../../providers/token";

export default function Habits() {
  const [createModal, setCreateModal] = useState(false);
  const { token } = useToken();

  const setCompletedHabit = (id) => {
    api
      .patch(
        `/habits/${id}`,
        {
          Headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        { achieved: true }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Switch>
      <Route path="/habit/:habit_id">
        <Habit />
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
                      onClick={() => setCompletedHabit("habit_id")}
                    />
                  }
                  goTo="habit"
                  id="1234"
                  isCompleted={false}
                  data={{
                    // objeto de teste
                    title: "Calistenia a tarde (15 minutos)",
                    category: "Sáude",
                    difficulty: "Muito díficil",
                    frequency: "Diária",
                    achieved: false,
                    user: 673,
                    how_much_achieved: 30,
                  }}
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
