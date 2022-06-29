import { Container, Content, HabitContainer } from "./style";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Button from "../Button";
import Modal from "../Modal";
import api from "../../services/api";
import { useToken } from "../../providers/token";
import { useHistory } from "react-router-dom/";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

export default function Habit() {
  const location = useLocation();
  const history = useHistory();
  const { state } = location;
  const { token } = useToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const deleteHabit = () => {
    api
      .delete(`/habits/${state.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        history.push("/habit");
      });
  };

  const updateHabit = (data) => {
    data = {
      ...data,
      title: data.title === "" ? state.title : data.title,
      category: data.category === "" ? state.category : data.category,
      difficulty: data.difficulty === "" ? state.difficulty : data.difficulty,
      frequency: data.frequency === "" ? state.frequency : data.frequency,
      achieved: data.how_much_achieved === "100" ? true : false,
    };

    api
      .patch(`/habits/${state.id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => history.push("/habit"))
      .catch((err) => console.log(err));
  };

  const [smallView, setSmallView] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setSmallView(true);
      } else {
        setSmallView(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const CircularProgressWithLabel = (props) => {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" component="h1" color="text.secondary">
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    );
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <Container>
      <Sidebar />
      <Content>
        <HabitContainer>
          <CircularProgressWithLabel
            value={state.how_much_achieved}
            size={smallView ? "50vw" : "30vw"}
          />
          <div>
            <Button primary onClick={() => history.push("/habit")}>
              Voltar
            </Button>

            <h1>{state.title}</h1>
            <h2>
              Dificuldade: <span>{state.difficulty}</span>
            </h2>
            <p>
              Categoria: <span>{state.category}</span>
            </p>
            <p>
              Frequência: <span>{state.frequency}</span>
            </p>
            <span>
              {state.achieved
                ? " Hábito atingido! ^^"
                : " Meta de hábito ainda não atingido :C"}
            </span>
            <div>
              <Button success onClick={() => setOpenModal(true)}>
                Editar Hábito
              </Button>
              <Button negative onClick={deleteHabit}>
                Remover Hábito
              </Button>
            </div>
          </div>
        </HabitContainer>
      </Content>
      {openModal && (
        <Modal
          setModalState={setOpenModal}
          modalState={openModal}
          label="Editar Hábito"
        >
          <form onSubmit={handleSubmit(updateHabit)}>
            <Input
              label="Titulo"
              type="text"
              name="title"
              placeholder={state.title}
              register={register}
              error={errors.title?.message}
            />
            <Input
              label="Categoria"
              type="text"
              name="category"
              placeholder={state.category}
              register={register}
              error={errors.category?.message}
            />
            <Input
              label="Dificuldade"
              type="text"
              name="difficulty"
              placeholder={state.difficulty}
              register={register}
              error={errors.difficulty?.message}
            />
            <Input
              label="Frequência"
              type="text"
              name="frequency"
              placeholder={state.frequency}
              register={register}
              error={errors.frequency?.message}
            />
            <Input
              label={`Progresso`}
              type="range"
              name="how_much_achieved"
              register={register}
              error={errors.how_much_achieved?.message}
            />
            <Button success type="submit">
              Salvar Alterações
            </Button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
