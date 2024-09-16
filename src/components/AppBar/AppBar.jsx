import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { selectIsLoggedInAuth } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return (
    <header>
      <div className={css.wrap}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
      <hr className={css.hr} />
    </header>
  );
};

export default AppBar;
