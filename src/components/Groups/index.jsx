import { useState, useEffect } from "react";
import api from "../../services/api";

import { FiUser } from "react-icons/fi";
import { FaTasks, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";

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
import Input from "../../components/Input";
import Modal from "../../components/Modal";

import { useHistory } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchemaNewGroup from "./formSchemaNewGroup";
import { useUser } from "../../providers/user";

export default function GroupsCard() {
  const { user } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchemaNewGroup),
  });

  const [disableButtons, setDisableButtons] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [groups, setGroups] = useState([]);
  const [page, setPage] = useState(1);
  const [requestInfo, setRequestInfo] = useState({});
  const history = useHistory();
  const { token } = useToken();
  const [search, setSearch] = useState("");

  const searchAllgroups = () => {
    setDisableButtons(false);
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
  };

  useEffect(() => {
    searchAllgroups();
  }, [page]);

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

  const handleNewGroup = (data) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Grupo criado com sucesso!");
        console.log(response.data);
        setOpenModal(false);
        reset();

        history.push("/groups");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao criar grupo!");
      });
  };

  const handleMyGroups = () => {
    setDisableButtons(true);

    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.length) {
          toast.success("Grupos obtidos com sucesso!");
          setGroups(response.data);
        } else {
          toast.error("Este usuário não possui grupos!");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erro ao buscar grupos deste usuário!");
      });
  };

  return (
    <Container>
      <ListContainer>
        <ButtonsContainer>
          <SearchInput OnClick={searchGroup} setValue={setSearch} />

          <Button primary onClick={searchAllgroups}>
            Todos os grupos
          </Button>

          <Button onClick={handleMyGroups}>Meus grupos</Button>

          <Button secondary onClick={() => setOpenModal(true)}>
            Novo Grupo
          </Button>
        </ButtonsContainer>
        <GroupsContainer>
          {/* {myGroups.length !== 0 && setGroups(myGroups)} */}

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
          {!disableButtons && (
            <>
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
            </>
          )}
        </ButtonsBotContainer>
      </ListContainer>

      {openModal && (
        <Modal
          setModalState={setOpenModal}
          modalState={openModal}
          label="Novo grupo"
        >
          <form
            onSubmit={handleSubmit(handleNewGroup)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "16px",
              minWidth: "320px",
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
    </Container>
  );
}
