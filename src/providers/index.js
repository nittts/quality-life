import { UserProvider } from "./user";
import { TokenProvider } from "./token";

export default function Providers({ children }) {
  return (
    <UserProvider>
      <TokenProvider>{children}</TokenProvider>
    </UserProvider>
  );
}
