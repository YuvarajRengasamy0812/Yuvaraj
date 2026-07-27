import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, currentPath }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);

  return (
    <div className="app-shell">
      <Header currentPath={currentPath} />
      <main>{children}</main>
      <Footer currentPath={currentPath} />
    </div>
  );
}