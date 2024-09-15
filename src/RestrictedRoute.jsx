import { useSelector } from "react-redux";
import { selectIsLoggedInAuth } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
