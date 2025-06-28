// import styles from './header.module.scss';
import { NotiIcon } from '../atoms/Icons';
import Logo from '../atoms/Logo';
import SearchBar from '../atoms/SearchBar/SearchBar';

function Header() {
  return (
    <div>
      <div className="searchBar">
        <Logo />
        <SearchBar />
      </div>
      <div className="auth">
        <a href="/">내 가게</a>
        <a href="/">로그아웃</a>
        <NotiIcon />
      </div>
    </div>
  );
}

export default Header;
