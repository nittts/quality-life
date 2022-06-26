import { Container, Content, Label } from "./style";

export default function List({ children, label }) {
  return (
    <Container>
      <Label>{label}</Label>
      <Content>{children}</Content>
    </Container>
  );
}
