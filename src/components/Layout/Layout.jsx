import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
