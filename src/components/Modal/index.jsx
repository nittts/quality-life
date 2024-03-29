import { Container, Header, Content } from "./style";
import Button from "../Button";

export default function Modal({
  children,
  label,
  modalState,
  setModalState,
  ...rest
}) {
  const handleCloseModal = (e) => {
    if (e.target.id === "modal-background") {
      setModalState(false);
    }
  };

  return (
    <Container id="modal-background" onClick={(e) => handleCloseModal(e)}>
      <Content>
        <Header>
          <h1>{label}</h1>
          <Button onClick={(e) => setModalState(false)} color="rose" width={48}>
            X
          </Button>
        </Header>
        {children}
      </Content>
    </Container>
  );
}
