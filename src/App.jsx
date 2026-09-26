import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import EducationArticle from "./pages/EducationArticle";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Travel from "./pages/Travel";
import TravelArticle from "./pages/TravelArticle";

const routes = {
  "/": Home,
  "/about": About,
  "/education": Education,
  "/skills": Skills,
  "/projects": Projects,
  "/gallery": Gallery,
  "/company": Company,
  "/travel": Travel,
  "/contact": Contact,
};

export default function App() {
  const [path, setPath] = useState(window.location.pathname || "/");

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const Page = useMemo(() => {
    if (path.startsWith("/education/")) {
      const slug = path.replace("/education/", "");
      return () => <EducationArticle slug={slug} />;
    }

    if (path.startsWith("/travel/")) {
      const slug = path.replace("/travel/", "");
      return () => <TravelArticle slug={slug} />;
    }

    return routes[path] ?? NotFound;
  }, [path]);

  return (
    <Layout currentPath={path}>
      <Page />
    </Layout>
  );
}