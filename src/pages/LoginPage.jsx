import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm/LoginForm";
import { selectErrorAuth, selectLoadingAuth } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import Title from "../components/Title/Title";

export default function LoginPage() {
  const loading = useSelector(selectLoadingAuth);
  const error = useSelector(selectErrorAuth);

  return (
    <div>
      <Title text={"Log In"} />
      <LoginForm />
      {loading && <Loader />}
      {error && <Error message={error} />}
    </div>
  );
}
