import { Container, Content, HabitContainer } from "./style";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Button from "../Button";
import Modal from "../Modal";

export default function Habit() {
  const location = useLocation();
  const { state } = location;

  const deleteHabit = () => {
    // axios delete usando o habit_id
  };

  const updateHabit = (data) => {
    // axios patch usando o habit_id
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
              <Button negative>Remover Hábito</Button>
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
          <h1>construir modal de editar</h1>
        </Modal>
      )}
    </Container>
  );
}
