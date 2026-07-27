import { ArrowUpRight } from "lucide-react";
import AppLink from "../components/AppLink";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found." text="This route is not available in the portfolio." />
      <section className="section white"><div className="section-inner center-action"><AppLink className="old-btn" to="/">Back Home <ArrowUpRight size={17} /></AppLink></div></section>
    </>
  );
}