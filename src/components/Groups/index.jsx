import { useState, useEffect } from "react";
import api from "../../services/api";
import axios from "axios";

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
import { useHistory } from "react-router-dom";

export default function GroupsCard() {
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);
  const [requestInfo, setRequestInfo] = useState({});
  const history = useHistory();
  const { token } = useToken();
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get(`groups/?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRequestInfo(response.data);
        setGroups(response.data.results);
      })
      .catch((error) => console.log(error));
  }, [page]);

  // const handleMyGroups = () => {
  //   axios
  //     .get(`https://kenzie-habits.herokuapp.com/groups/?page=${page}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       // console.log(response);
  //       // console.log(token);
  //       console.log(response);
  //       setGroups(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // };

  const searchGroup = () => {
    api
      .get(`groups/?page=1&search=${search}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setGroups(res.data.results));
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (requestInfo.next !== null) {
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <ListContainer>
        <ButtonsContainer>
          <SearchInput OnClick={searchGroup} setValue={setSearch} />
          <Button>Meus grupos</Button>
          <Button secondary>Novo Grupo</Button>
        </ButtonsContainer>
        <GroupsContainer>
          {groups.map((group) => (
            <li
              key={group.id}
              onClick={() => history.push(`/groups/${group.id}/`)}
            >
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
          <Button
            primary
            onClick={previousPage}
            disabled={requestInfo.previous === null && "disabled"}
          >
            Anterior
          </Button>
          <Button
            primary
            onClick={nextPage}
            disabled={requestInfo.next === null && "disabled"}
          >
            Próximo
          </Button>
        </ButtonsBotContainer>
      </ListContainer>
    </Container>
  );
}
