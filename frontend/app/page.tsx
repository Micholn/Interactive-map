'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { StatsBar } from '@/components/StatsBar';
import { FilterRail } from '@/components/FilterRail';
import { GraphCanvas } from '@/components/GraphCanvas';
import { EntityPanel } from '@/components/EntityPanel';
import { NodeGallery } from '@/components/NodeGallery';
import { InsightStrip } from '@/components/InsightStrip';
import { ecosystem } from '@/data/ecosystem';
import { EcosystemNode, EntityCategory } from '@/types/graph';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<EntityCategory | 'all'>('all');
  const [selected, setSelected] = useState<EcosystemNode | undefined>(ecosystem.nodes.find((n) => n.id === 'nvidia'));

  const filteredData = useMemo(() => {
    if (activeCategory === 'all') return ecosystem;
    const keep = new Set(ecosystem.nodes.filter((node) => node.category === activeCategory || node.id === selected?.id).map((node) => node.id));
    const linkedIds = new Set<string>(keep);
    ecosystem.links.forEach((link) => {
      if (keep.has(String(link.source))) linkedIds.add(String(link.target));
      if (keep.has(String(link.target))) linkedIds.add(String(link.source));
    });
    return {
      nodes: ecosystem.nodes.filter((node) => linkedIds.has(node.id)),
      links: ecosystem.links.filter((link) => linkedIds.has(String(link.source)) && linkedIds.has(String(link.target)))
    };
  }, [activeCategory, selected?.id]);

  const visibleCards = activeCategory === 'all' ? ecosystem.nodes : ecosystem.nodes.filter((node) => node.category === activeCategory);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 px-4 py-6 text-white md:px-8">
      <div className="fixed inset-0 -z-10 bg-aurora" />
      <div className="mx-auto max-w-7xl space-y-6">
        <Header />
        <StatsBar data={ecosystem} />
        <div className="grid gap-6 lg:grid-cols-[250px_1fr_340px]">
          <FilterRail active={activeCategory} onChange={setActiveCategory} />
          <GraphCanvas data={filteredData} selected={selected} onSelect={setSelected} />
          <EntityPanel selected={selected} nodes={ecosystem.nodes} links={ecosystem.links} />
        </div>
        <InsightStrip />
        <section className="space-y-4">
          <div>
            <h2 className="font-display text-3xl font-bold">Entity pages preview</h2>
            <p className="mt-2 text-slate-400">Each card can become a Geo-backed entity page with sources, relationship paths, and dependency metrics.</p>
          </div>
          <NodeGallery nodes={visibleCards} selected={selected} onSelect={setSelected} />
        </section>
      </div>
    </main>
  );
}
