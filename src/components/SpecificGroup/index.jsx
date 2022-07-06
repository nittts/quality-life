import { useLocation, useHistory } from "react-router-dom";
import {
  Container,
  Content,
  CreatorContainer,
  GoalsContainer,
  HabitsContainer,
  UsersContainer,
  ButtonsContainer,
  ModalContainer,
} from "./style";
import List from "../List";
import api from "../../services/api";
import Button from "../Button";
import Modal from "../Modal";

import { AiTwotoneCrown } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToken } from "../../providers/token";
import { useUser } from "../../providers/user";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchemaEditGroup from "./formSchemaEditGroup";
<<<<<<< HEAD
=======
import Input from "../Input";
>>>>>>> 136d5d6a9ecc9fcb771ab10e9ae27c7d11b4bc4b

export default function SpecificGroup() {
  const params = useParams();
  const { group_id } = params;
  const [state, setState] = useState({});
  const [goals, setGoals] = useState([]);
  const [activities, setActivities] = useState([]);
  const { token } = useToken();
  const { user } = useUser();
  const location = useLocation();
  const history = useHistory();

  const { name, category, creator, description, users_on_group } = state;

  const option = {
    year: "numeric",
    month: "long" || "short" || "numeric",
    weekday: "long" || "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchemaEditGroup),
  });

  /* ------------------------- Group related requests ------------------------- */

  const getGroupGoals = () => {
    api
      .get(`/goals/?group=${group_id}&page=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setGoals(res.data.results));
  };

  const getGroupActivities = () => {
    api
      .get(`/activities/?group=${group_id}&page=1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setActivities(res.data.results));
  };

  const getGroup = () => {
    api
      .get(`/groups/${group_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setState(res.data));
  };

  const unsubscribeGroup = () => {
    api
      .delete(`/groups/${group_id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Saiu do grupo com sucesso!");
        reload();
      })
      .catch((err) => toast.error("fail"));
  };

  const subscribeGroup = () => {
    api
      .post(
        `/groups/${group_id}/subscribe/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Se inscreveu no grupo com sucesso!");
        reload();
      })
      .catch((err) => console.log(err));
  };

  const editGroup = (data) => {
    api
      .patch(`/groups/${group_id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Grupo editado com sucesso!");
        reload();
        setGroupModal(false);
      });
  };

  const [groupModal, setGroupModal] = useState(false);

  /* ------------------------------------ - ----------------------------------- */

  /* ------------------------- goal related requests ------------------------- */

  const [goalModal, setGoalModal] = useState(false);
  const [goalInfo, setGoalInfo] = useState({});

  const handleGoalModal = (goal_id) => {
    setGoalModal(true);
    getSpecificGoal(goal_id);
  };

  const getSpecificGoal = (goal_id) => {
    api
      .get(`/goals/${goal_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setGoalInfo(res.data));
  };

  const updateGoal = (goal_id) => {
    api
      .patch(
        `/goals/${goal_id}/`,
        { achieved: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  const createGoal = (goal_id) => {
    api
      .post(
        `/goals/${goal_id}/`,
        {
          title:
            "Nenhuma falta na academia cometida pelos membros do grupo na semana",
          difficulty: "Díficil",
          how_much_achieved: 0,
          achieved: false,
          group: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  const deleteGoal = (goal_id) => {
    api
      .delete(`/goals/${goal_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res));
  };

  /* ------------------------------------ - ----------------------------------- */

  /* ------------------------ activity related requests ----------------------- */

  const [activityModal, setActivityModal] = useState(false);
  const [activityInfo, setActivityInfo] = useState({});

  const handleActivityModal = (activity_id) => {
    setActivityModal(true);
    getSpecificActivity(activity_id);
  };

  const getSpecificActivity = (activity_id) => {
    api
      .get(`/activities/${activity_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setActivityInfo(res.data));
  };

  const createActivity = (activity_id) => {
    api
      .post(
        `/activities/${activity_id}/`,
        {
          title: "Crossfit",
          realization_time: "2021-03-10T15:00:00Z",
          group: 753,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  const updateActivity = (activity_id) => {
    api
      .patch(
        `/activities/${activity_id}/`,
        {
          title: "Treino funcional na praia - atualizado",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res));
  };

  const deleteActivity = (activity_id) => {
    api
      .delete(`/activities/${activity_id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res));
  };

  /* ------------------------------------ - ----------------------------------- */

  const reload = () => {
    getGroup();
    getGroupGoals();
    getGroupActivities();
  };

  useEffect(() => {
    reload();
  }, [location]);

  return (
    <ModalContainer>
      <Container>
        <h2>
          {name && name} - {category && category}
        </h2>
        <p>{description && description}</p>
        <Content>
          <CreatorContainer>
            <h2>
              <AiTwotoneCrown /> {creator && creator.username}
            </h2>
            <p>{creator && creator.email}</p>
          </CreatorContainer>
          <ButtonsContainer>
            <Button
              primary
              disabled={creator && creator.id !== user.id ? true : false}
            >
              Criar Hábito
            </Button>
            <Button
              secondary
              disabled={creator && creator.id !== user.id ? true : false}
            >
              Criar Meta
            </Button>
            <Button
              onClick={setGroupModal}
              disabled={creator && creator.id !== user.id ? true : false}
            >
              Editar Grupo
            </Button>
            <Button success onClick={subscribeGroup}>
              Inscrever-se
            </Button>
            <Button negative onClick={unsubscribeGroup}>
              Desinscrever-se
            </Button>
            <Button primary onClick={() => history.push("/groups")}>
              Voltar
            </Button>
          </ButtonsContainer>
          <div>
            <GoalsContainer>
              <h2>
                Atividades - <span>{activities && activities.length}</span>
              </h2>
              <List>
                {activities &&
                  activities.map((activity, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => handleActivityModal(activity.id)}
                      >
                        <h2>{activity.title}</h2>
                        <p>
                          {new Date(
                            activity.realization_time
                          ).toLocaleDateString("pt-br", option)}
                        </p>
                      </li>
                    );
                  })}
              </List>
            </GoalsContainer>
            <HabitsContainer>
              <h2>
                Metas - <span>{goals && goals.length}</span>
              </h2>
              <List>
                {goals &&
                  goals.map((goal, index) => {
                    return (
                      <li key={index} onClick={() => handleGoalModal(goal.id)}>
                        <h2>{goal.title}</h2>
                      </li>
                    );
                  })}
              </List>
            </HabitsContainer>
          </div>
          <UsersContainer>
            <h2>
              Usuários no grupo -
              <span>{users_on_group && users_on_group.length}</span>
            </h2>
            <List>
              {users_on_group &&
                users_on_group.map((user, index) => {
                  return (
                    <li key={index}>
                      <h2>{user.username}</h2>
                      <p>{user.email}</p>
                    </li>
                  );
                })}
            </List>
          </UsersContainer>
        </Content>
      </Container>
      {goalModal && (
        <Modal
          label={"Editar Meta do Grupo"}
          modalState={goalModal}
          setModalState={setGoalModal}
        />
      )}
      {activityModal && (
        <Modal
          label={"Editar Hábito do Grupo"}
          modalState={activityModal}
          setModalState={setActivityModal}
        />
      )}
      {groupModal && (
        <Modal
          label={"Editar Grupo"}
          modalState={groupModal}
          setModalState={setGroupModal}
        >
          <form
            onSubmit={handleSubmit(editGroup)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "16px",
              minWidth: "310px",
            }}
          >
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Nome"
              register={register}
              error={errors.name?.message}
            />
            <Input
              label="Descrição"
              type="text"
              name="description"
              placeholder="Descrição"
              register={register}
              error={errors.description?.message}
            />
            <Input
              label="Categoria"
              type="text"
              name="category"
              placeholder="Categoria"
              register={register}
              error={errors.category?.message}
            />
            <Button success type="submit">
              Novo grupo
            </Button>
          </form>
        </Modal>
      )}
    </ModalContainer>
  );
}
