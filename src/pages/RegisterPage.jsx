import { useSelector } from "react-redux";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { selectErrorAuth, selectLoadingAuth } from "../redux/auth/selectors";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import Title from "../components/Title/Title";

export default function RegisterPage() {
  const loading = useSelector(selectLoadingAuth);
  const error = useSelector(selectErrorAuth);

  return (
    <div>
      <Title text={"Registration"} />
      <RegisterForm />
      {loading && <Loader />}
      {error && <Error message={error} />}
    </div>
  );
}
