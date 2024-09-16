import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.navBar}>
      <NavLink to="/register" className={css.navBtn}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.navBtn}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
