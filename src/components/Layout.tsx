import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const Layout = () => {
  const isHome = useLocation().pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${isHome ? "" : "pt-[120px]"}`}>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
