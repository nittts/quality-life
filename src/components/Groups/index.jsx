import {
  Container,
  ListContainer,
  ButtonsContainer,
  GroupsContainer,
  ButtonsBotContainer,
} from "./style";
import SearchInput from "../../components/Search";
import Button from "../../components/Button";

export default function GroupsCard() {
  return (
    <Container>
      <ListContainer>
        <ButtonsContainer>
          <SearchInput />
          <Button>Meus grupos</Button>
          <Button secondary>Novo Grupo</Button>
        </ButtonsContainer>
        <GroupsContainer>
          <li>
            <header>
              <h2>Saúde 2022</h2>
              <div className="category-and-author">
                <span className="category">Saúde</span>
                <span className="author">William Baierle</span>
              </div>
            </header>
            <section>
              <p>
                Somos um grupo voltado à saúde, trazendo bons hábitos para a sua
                vida.
              </p>
            </section>
            <footer>
              <span className="members">Membros: 500</span>
              <span className="activities">Atividades: 24</span>
            </footer>
          </li>

          <li>
            <header>
              <h2>Saúde 2022</h2>
              <div className="category-and-author">
                <span className="category">Saúde</span>
                <span className="author">William Baierle</span>
              </div>
            </header>
            <section>
              <p>
                Somos um grupo voltado à saúde, trazendo bons hábitos para a sua
                vida.
              </p>
            </section>
            <footer>
              <span className="members">Membros: 500</span>
              <span className="activities">Atividades: 24</span>
            </footer>
          </li>

          <li>
            <header>
              <h2>Saúde 2022</h2>
              <div className="category-and-author">
                <span className="category">Saúde</span>
                <span className="author">William Baierle</span>
              </div>
            </header>
            <section>
              <p>
                Somos um grupo voltado à saúde, trazendo bons hábitos para a sua
                vida.
              </p>
            </section>
            <footer>
              <span className="members">Membros: 500</span>
              <span className="activities">Atividades: 24</span>
            </footer>
          </li>

          <li>
            <header>
              <h2>Saúde 2022</h2>
              <div className="category-and-author">
                <span className="category">Saúde</span>
                <span className="author">William Baierle</span>
              </div>
            </header>
            <section>
              <p>
                Somos um grupo voltado à saúde, trazendo bons hábitos para a sua
                vida.
              </p>
            </section>
            <footer>
              <span className="members">Membros: 500</span>
              <span className="activities">Atividades: 24</span>
            </footer>
          </li>

          <li>
            <header>
              <h2>Saúde 2022</h2>
              <div className="category-and-author">
                <span className="category">Saúde</span>
                <span className="author">William Baierle</span>
              </div>
            </header>
            <section>
              <p>
                Somos um grupo voltado à saúde, trazendo bons hábitos para a sua
                vida.
              </p>
            </section>
            <footer>
              <span className="members">Membros: 500</span>
              <span className="activities">Atividades: 24</span>
            </footer>
          </li>

          <li>
            <header>
              <h2>Saúde 2022</h2>
              <div className="category-and-author">
                <span className="category">Saúde</span>
                <span className="author">William Baierle</span>
              </div>
            </header>
            <section>
              <p>
                Somos um grupo voltado à saúde, trazendo bons hábitos para a sua
                vida.
              </p>
            </section>
            <footer>
              <span className="members">Membros: 500</span>
              <span className="activities">Atividades: 24</span>
            </footer>
          </li>
        </GroupsContainer>
        <ButtonsBotContainer>
          <Button primary>Anterior</Button>
          <Button primary>Próximo</Button>
        </ButtonsBotContainer>
      </ListContainer>
    </Container>
  );
}
