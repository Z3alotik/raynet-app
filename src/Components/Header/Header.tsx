import { HeaderProps } from "./Header.types";
import "./Header.styles.css";

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
  return (
    <div className="Header">
      <header>
        <h1>Klienti</h1>
      </header>
      <input
        type="text"
        placeholder="Hledej..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Header;
