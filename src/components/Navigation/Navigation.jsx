import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedInAuth } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.navBtn}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={css.navBtn}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
