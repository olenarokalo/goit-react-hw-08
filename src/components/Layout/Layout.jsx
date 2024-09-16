import { Suspense } from "react";
import Loader from "../Loader/Loader";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
