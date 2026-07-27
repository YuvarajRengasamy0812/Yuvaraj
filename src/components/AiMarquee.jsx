import { Sparkles } from "lucide-react";
import { aiTools } from "../data/portfolio";

export default function AiMarquee() {
  return (
    <div className="ai-marquee">
      <div>
        {[...aiTools, ...aiTools, ...aiTools].map((tool, index) => <span key={`${tool}-${index}`}><Sparkles size={14} /> {tool}</span>)}
      </div>
    </div>
  );
}