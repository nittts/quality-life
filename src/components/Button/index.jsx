// To do build component
import { Container } from "./style";

export default function Button({ color, children, ...rest }) {
  return (
    <Container {...rest}>
      <button className={color}> {children}</button>
    </Container>
  );
}
