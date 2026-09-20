const ecosystemTools = [
  {
    name: "Alphabet AI",
    href: "https://roboticskite.github.io/Kite_robotics_ai_projects/alphabet_hand_Traking_puzzle.html",
  },
  {
    name: "Smart Keyboard",
    href: "https://roboticskite.github.io/Kite_robotics_ai_projects/gesture-keyboard.html",
  },
  {
    name: "Number AI",
    href: "https://roboticskite.github.io/Kite_robotics_ai_projects/number_hand_puzzle.html",
  },
  {
    name: "Figure AI",
    href: "https://roboticskite.github.io/Kite_robotics_ai_projects/finger-fun-count.html",
  },
  {
    name: "People AI",
    href: "https://roboticskite.github.io/Kite_robotics_ai_projects/people_counter.html",
  },
];

function ToolSet({ hidden = false }) {
  return (
    <div className="ai-ecosystem-tool-set" aria-hidden={hidden}>
      {ecosystemTools.map((tool) => (
        <a
          className="ai-ecosystem-tool"
          href={tool.href}
          key={tool.name}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={hidden ? -1 : 0}
          aria-label={tool.name}
        >
          <span className="ai-ecosystem-tool-dot" />
          {tool.name}
        </a>
      ))}
    </div>
  );
}

export default function AiEcosystemTicker() {
  return (
    <section className="ai-ecosystem-ticker" aria-label="OKMS-AI Projects next generation robotics AI ecosystem">
      <div className="ai-ecosystem-heading">
        <span className="ai-ecosystem-live-dot" />
        <span>KMS-AI Live</span>
        {/* <span className="ai-ecosystem-heading-divider">/</span> */}
        {/* <span className="ai-ecosystem-heading-muted">Next-gen robotics AI ecosystem</span> */}
      </div>
      <div className="ai-ecosystem-window">
        <div className="ai-ecosystem-track">
          <ToolSet />
          <ToolSet hidden />
        </div>
      </div>
    </section>
  );
}
