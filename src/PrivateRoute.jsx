import { useSelector } from "react-redux";
import { selectIsLoggedInAuth } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
