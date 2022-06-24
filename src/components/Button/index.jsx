// To do build component
import { Container } from "./style";

export default function Button({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
