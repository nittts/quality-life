import { Container, Content } from "./style";
import { useHistory } from "react-router-dom";

export default function Card({ children, icon, id, isCompleted, goTo }) {
  const history = useHistory();

  const whereGoTo = () => {
    history.push(`/${goTo}/${id}`);
  };

  return (
    <Container>
      <Content isCompleted={isCompleted} onClick={whereGoTo}>
        {children}
      </Content>
      {icon && icon}
    </Container>
  );
}
