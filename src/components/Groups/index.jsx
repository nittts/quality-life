import { useState, useEffect } from "react";
import api from "../../services/api";

import { FiUser } from "react-icons/fi";
import { FaTasks, FaFlag } from "react-icons/fa";

import {
  Container,
  ListContainer,
  ButtonsContainer,
  GroupsContainer,
  ButtonsBotContainer,
} from "./style";

import { useToken } from "../../providers/token";

import SearchInput from "../../components/Search";
import Button from "../../components/Button";

export default function GroupsCard() {
  const [groups, setGroups] = useState([]);
  const { token } = useToken();

  useEffect(() => {
    api
      .get("groups/")
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleMyGroups = () => {
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(token);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <ListContainer>
        <ButtonsContainer>
          <SearchInput />
          <Button onClick={handleMyGroups}>Meus grupos</Button>
          <Button secondary>Novo Grupo</Button>
        </ButtonsContainer>
        <GroupsContainer>
          {groups.map((group) => (
            <li key={group.id}>
              <header>
                <h2>{group.name}</h2>
                <div className="category-and-author">
                  <span className="category">{group.category}</span>
                  <span className="author">{group.creator.username}</span>
                </div>
              </header>

              <section>
                <p>{group.description}</p>
              </section>

              <footer>
                <span className="members" title="Membros">
                  <FiUser /> {group.users_on_group.length}
                </span>
                <span title="Metas">
                  <FaFlag /> {group.goals.length}
                </span>
                <span className="activities" title="Atividades">
                  <FaTasks /> {group.activities.length}
                </span>
              </footer>
            </li>
          ))}
        </GroupsContainer>
        <ButtonsBotContainer>
          <Button primary>Anterior</Button>
          <Button primary>Próximo</Button>
        </ButtonsBotContainer>
      </ListContainer>
    </Container>
  );
}
