// To do build page
import { Container, Content, ProfileContainer, ListContainer } from "./style";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Card from "../../components/Card";
import List from "../../components/List";
import { FiCheckCircle } from "react-icons/fi";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToken } from "../../providers/token";
import { useUser } from "../../providers/user";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const { token } = useToken();
  const { user } = useUser();
  const history = useHistory();
  const location = useLocation();
  const [habitList, setHabitList] = useState([]);

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

  const upHabit = (id, how_much_achieved) => {
    if (how_much_achieved >= 100 || how_much_achieved + 25 > 100) {
      how_much_achieved = 100;
    } else {
      how_much_achieved = how_much_achieved + 25;
    }

    api
      .patch(
        `/habits/${id}/`,
        {
          achieved: how_much_achieved === 100 ? true : false,
          how_much_achieved,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        getHabits();
      })
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

  useEffect(() => {
    getHabits();
    //eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    const now = new Date();

    if (now.getTime() === 86400000) {
      habitList.forEach((habit) => {
        api
          .patch(
            `/habits/${habit.id}/`,
            {
              achieved: false,
              how_much_achieved: 0,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            getHabits();
          })
          .catch((err) => console.log(err));
      });
    }
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <ListContainer>
          <List label="Meus Hábitos">
            {habitList &&
              habitList.map((habit) => {
                return (
                  <Card
                    icon={
                      <FiCheckCircle
                        onClick={() =>
                          habit.how_much_achieved === 100
                            ? resetHabit(habit.id)
                            : upHabit(habit.id, habit.how_much_achieved)
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
          <List label="Meus Grupos"></List>
        </ListContainer>
      </Content>
    </Container>
  );
}
