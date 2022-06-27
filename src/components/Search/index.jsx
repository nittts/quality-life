import { SearchContainer } from "./style";
import { FiSearch } from "react-icons/fi";

export default function Search({ children }) {
  return (
    <SearchContainer>
      <input type="text" placeholder="Digite sua busca!"></input>
      <button>
        <FiSearch size={24} />
      </button>
    </SearchContainer>
  );
}
