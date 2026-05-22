import { BrainCircuit, Network, Zap } from 'lucide-react';

export function InsightStrip() {
  const insights = [
    { icon: Network, title: 'Centrality exposes power', text: 'Nodes like Nvidia, CUDA, PyTorch, and cloud providers become visible as ecosystem choke points.' },
    { icon: BrainCircuit, title: 'Layered dependency paths', text: 'Users can move from model to lab, then down into compute and hardware infrastructure.' },
    { icon: Zap, title: 'Open does not mean independent', text: 'Open-weight models may still rely on concentrated frameworks, libraries, and GPU supply chains.' }
  ];

  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {insights.map(({ icon: Icon, title, text }) => (
        <div key={title} className="glass rounded-3xl p-6">
          <Icon className="text-emerald-300" />
          <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
        </div>
      ))}
    </section>
  );
}
