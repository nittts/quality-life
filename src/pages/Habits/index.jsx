import { Switch, Route } from "react-router-dom";
import {
  Container,
  Content,
  HabitsContainer,
  ProfileContainer,
  Header,
} from "./style";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
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
import formSchema from "./FormSchema";

export default function Habits() {
  const [createModal, setCreateModal] = useState(false);
  const { token } = useToken();
  const { user, getUser } = useUser();
  const location = useLocation();
  const [habitList, setHabitList] = useState([]);
  const [completed, setCompleted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const setCompletedHabit = (id) => {
    console.log(id);
    api
      .patch(
        `/habits/${id}/`,
        { achieved: true, how_much_achieved: 100 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => getHabits())
      .catch((err) => console.log(err));
  };

  const resetHabit = (id) => {
    console.log(id);
    api
      .patch(
        `/habits/${id}/`,
        { achieved: false, how_much_achieved: 0 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => getHabits())
      .catch((err) => console.log(err));
  };

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setHabitList(res.data))
      .catch((err) => console.log(err));
  };

  const registerHabit = (data) => {
    api
      .post(
        `/habits/`,
        { ...data, achieved: false, how_much_achieved: 0, user: user.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getHabits();
        setCreateModal(false);
        reset();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getHabits();
    //eslint-disable-next-line
  }, [location]);

  return (
    <Switch>
      <Route path="/habit/:habit_id">
        <Habit />
      </Route>
      <Route path={"/"}>
        <Container>
          <Sidebar />
          <Content>
            <Header>
              <Profile />
            </Header>
            <HabitsContainer>
              <Button onClick={() => setCreateModal(true)}>Criar Hábito</Button>
              <List label={"Hábitos"}>
                {habitList &&
                  habitList.map((habit) => {
                    return (
                      <Card
                        icon={
                          <FiCheckCircle
                            onClick={() =>
                              habit.how_much_achieved === 100
                                ? resetHabit(habit.id)
                                : setCompletedHabit(habit.id)
                            }
                          />
                        }
                        goTo="habit"
                        id={habit.id}
                        isCompleted={habit.achieved}
                        data={{ ...user, ...habit }}
                        key={habit.id}
                      >
                        <h1>
                          {habit.title} - {habit.frequency}
                        </h1>
                        <h1>{habit.how_much_achieved}%</h1>
                      </Card>
                    );
                  })}
              </List>
            </HabitsContainer>
          </Content>

          {createModal && (
            <Modal
              setModalState={setCreateModal}
              modalState={createModal}
              label="Criar hábito"
            >
              <form onSubmit={handleSubmit(registerHabit)}>
                <Input
                  label="Titulo"
                  type="text"
                  name="title"
                  placeholder="Ex: Calistenia à tarde..."
                  register={register}
                  error={errors.title?.message}
                />
                <Input
                  label="Categoria"
                  type="text"
                  name="category"
                  placeholder="Ex: Saúde, Musculação..."
                  register={register}
                  error={errors.category?.message}
                />
                <Input
                  label="Dificuldade"
                  type="text"
                  name="difficulty"
                  placeholder="Ex: Fácil, Médio, Difícil..."
                  register={register}
                  error={errors.difficulty?.message}
                />
                <Input
                  label="Frequência"
                  type="text"
                  name="frequency"
                  placeholder="Ex: Diária, Semanal, Quinzenal..."
                  register={register}
                  error={errors.frequency?.message}
                />
                <Button success type="submit">
                  Criar Hábito
                </Button>
              </form>
            </Modal>
          )}
        </Container>
      </Route>
    </Switch>
  );
}
