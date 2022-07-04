import { SearchContainer } from "./style";
import { FiSearch } from "react-icons/fi";

export default function Search({ children, OnClick, setValue }) {
  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="Digite sua busca!"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={OnClick} type="button">
        <FiSearch size={24} />
      </button>
    </SearchContainer>
  );
}
