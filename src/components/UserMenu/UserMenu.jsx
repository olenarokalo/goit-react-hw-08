import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUserAuth } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserAuth);

  return (
    <div className={css.wrap}>
      <p className={css.welcomeText}>
        Welcome, <span>{user.name}</span> !
      </p>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
