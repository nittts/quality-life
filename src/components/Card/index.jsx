import { Container, Content } from "./style";
import { useHistory } from "react-router-dom";

export default function Card({
  children,
  icon,
  id,
  isCompleted,
  goTo,
  data,
  ...rest
}) {
  const history = useHistory();

  const whereGoTo = () => {
    history.push(`/${goTo}/${id}`, data);
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
