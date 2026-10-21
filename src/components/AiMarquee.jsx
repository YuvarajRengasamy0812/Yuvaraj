import { aiTools } from "../data/portfolio";

export default function AiMarquee() {
  return (
    <div className="ai-marquee">
      <div>
        {[...aiTools, ...aiTools, ...aiTools].map((tool, index) => <span key={`${tool}-${index}`}><i className="marquee-dot" aria-hidden="true" />{tool}</span>)}
      </div>
    </div>
  );
}