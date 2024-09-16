import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import Layout from "./components/Layout/Layout";
import { selectIsRefreshingAuth } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshingAuth);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) : (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
