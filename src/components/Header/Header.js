import "./Header.scss";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Upload from "./Upload/Upload";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
      <Upload />
    </header>
  );
}

export default Header;
