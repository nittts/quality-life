import {
  Container,
  ButtonsContainer,
  ListContainer,
  ButtonsBotContainer,
} from "./style";
import SearchInput from "../../components/Search";
import Button from "../../components/Button";

export default function GroupsCard() {
  return (
    <>
      <Container>
        <ListContainer>
          <ButtonsContainer>
            <SearchInput />
            <Button>Meus grupos</Button>
            <Button primary>Novo Grupo</Button>
          </ButtonsContainer>
          <ButtonsBotContainer>
            <Button tertiary>Anterior</Button>
            <Button tertiary>Próximo</Button>
          </ButtonsBotContainer>
        </ListContainer>
      </Container>
    </>
  );
}
