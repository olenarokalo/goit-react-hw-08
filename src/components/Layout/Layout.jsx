import { NavLink, Outlet } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedInAuth,
  selectUserAuth,
} from "../../redux/auth/selectors";
import css from "./Layout.module.css";

export default function Layout() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserAuth);
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return (
    <>
      <header className={css.header}>
        <div className={css.wrap}>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </div>
        {!isLoggedIn && (
          <div className={css.wrap}>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        )}
        {isLoggedIn && (
          <div className={css.wrap}>
            <p>Hello, {name}!</p>
            <button onClick={() => dispatch(logOut())} type="button">
              Logout
            </button>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
