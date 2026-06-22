'use client';

import { useMemo, useState } from 'react';
import type { ComponentType, ReactNode } from 'react';
import {
  Activity,
  Bell,
  BrainCircuit,
  Boxes,
  ChevronRight,
  CircuitBoard,
  Cloud,
  Cpu,
  Database,
  Gauge,
  GitBranch,
  Heart,
  Home as HomeIcon,
  Layers3,
  Menu,
  Network,
  Search,
  Settings,
  ShieldAlert,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ecosystem } from '@/data/ecosystem';
import { EcosystemNode, EntityCategory } from '@/types/graph';

const categoryMeta: Record<EntityCategory | 'all', { label: string; icon: ComponentType<{ className?: string }>; color: string }> = {
  all: { label: 'All Stack', icon: Network, color: 'bg-[#dfff47] text-black' },
  model: { label: 'Models', icon: BrainCircuit, color: 'bg-[#caf95d] text-black' },
  lab: { label: 'Labs', icon: Sparkles, color: 'bg-[#d9f7ff] text-[#063a47]' },
  framework: { label: 'Frameworks', icon: Boxes, color: 'bg-[#8fe9ff] text-[#063a47]' },
  repository: { label: 'Repos', icon: GitBranch, color: 'bg-[#fff4c9] text-[#3c2b00]' },
  compute: { label: 'Compute', icon: Cloud, color: 'bg-[#006f7d] text-white' },
  hardware: { label: 'Hardware', icon: Cpu, color: 'bg-[#071f26] text-white' }
};

const week = ['S 13', 'M 14', 'T 15', 'W 16', 'T 17', 'F 18', 'S 19'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 }   // ← faster stagger
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 180, damping: 18 }   // ← faster spring
  }
};

export default function Home() {
  const [active, setActive] = useState<EntityCategory | 'all'>('all');
  const [selected, setSelected] = useState<EcosystemNode>(ecosystem.nodes.find((n) => n.id === 'nvidia') || ecosystem.nodes[0]);

  const visibleNodes = useMemo(() => {
    if (active === 'all') return ecosystem.nodes;
    return ecosystem.nodes.filter((node) => node.category === active);
  }, [active]);

  const topNodes = [...ecosystem.nodes].sort((a, b) => b.centrality - a.centrality).slice(0, 6);
  const dependencyScore = Math.round(ecosystem.nodes.reduce((sum, node) => sum + node.centrality, 0) / ecosystem.nodes.length);

  return (
    <main className="min-h-screen bg-[#eaf9fb] text-[#071315]">
      <div className="mx-auto flex min-h-screen max-w-[1440px] gap-5 p-5">
        {/* LEFT SIDEBAR */}
        <aside className="sticky top-5 hidden h-[calc(100vh-40px)] w-[72px] flex-col items-center rounded-[34px] bg-white/55 py-4 shadow-[0_20px_70px_rgba(14,74,84,.12)] backdrop-blur md:flex">
          <motion.div 
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}   // ← faster
            className="mb-9 grid h-12 w-12 place-items-center rounded-full bg-[#071315] text-[#dfff47]"
          >
            <Zap size={25} fill="currentColor" />
          </motion.div>

          <nav className="flex flex-1 flex-col items-center gap-5">
            {[HomeIcon, BrainCircuit, Heart, Activity, Settings].map((Icon, idx) => (
              <motion.button 
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: 'spring', stiffness: 400 }}   // ← faster
                className={`grid h-12 w-12 place-items-center rounded-2xl transition ${idx === 1 ? 'bg-[#008393] text-[#dfff47] shadow-[0_18px_34px_rgba(0,131,147,.25)]' : 'text-[#071315]/80 hover:bg-white'}`}
              >
                <Icon size={20} fill={idx === 2 ? 'currentColor' : 'none'} />
              </motion.button>
            ))}
          </nav>

          <motion.button 
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="grid h-12 w-12 place-items-center rounded-2xl text-[#071315]/80 hover:bg-white"
          >
            <ChevronRight size={20} />
          </motion.button>
        </aside>

        <section className="flex-1 space-y-5 overflow-hidden">
          {/* HEADER */}
          <motion.header 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid gap-4 lg:grid-cols-[1fr_410px]"
          >
            <div className="relative">
              <motion.h1 
                variants={itemVariants}
                className="font-black leading-[.86] tracking-[-.08em] text-[#071315] text-[clamp(48px,8vw,92px)]"
              >
                AI STACK<br />
                <motion.span 
                  variants={itemVariants}
                  className="rounded-[26px] bg-[#dfff47] px-3 pb-2 tracking-[-.07em] inline-block"
                >
                  MAPPED!
                </motion.span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-5 max-w-xl text-lg font-semibold text-[#496066]"
              >
                A glamorous dependency dashboard for models, labs, frameworks, compute providers and hardware choke points.
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="space-y-5">
              <div className="flex items-center justify-end gap-3">
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 rounded-full bg-white/65 p-2 pr-6 shadow-[0_18px_40px_rgba(13,64,74,.12)] backdrop-blur"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-orange-100 to-cyan-100 text-xl">🧠</div>
                  <div>
                    <p className="font-black">AI Cartographer</p>
                    <p className="text-xs font-bold text-[#008393]">● Ecosystem view</p>
                  </div>
                </motion.div>
                <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }} className="grid h-14 w-14 place-items-center rounded-full bg-white/65 shadow-[0_18px_40px_rgba(13,64,74,.12)]"><Gauge size={20} /></motion.button>
                <motion.button whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }} className="grid h-14 w-14 place-items-center rounded-full bg-white/65 shadow-[0_18px_40px_rgba(13,64,74,.12)]"><Bell size={20} /></motion.button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {week.map((d, i) => (
                  <motion.button 
                    key={d}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    className={`rounded-full py-3 text-center text-sm font-black shadow-sm ${i === 1 ? 'bg-[#dfff47]' : 'bg-white/55 text-[#071315]/80'}`}
                  >
                    {d}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.header>

          <div className="grid gap-5 xl:grid-cols-[1.18fr_.82fr]">
            <section className="relative overflow-hidden rounded-[32px] bg-white/70 p-8 shadow-[0_25px_80px_rgba(18,73,84,.14)] backdrop-blur">
              <div className="absolute right-5 top-5 grid h-16 w-16 place-items-center rounded-full bg-[#008393] text-[#dfff47] shadow-[0_22px_50px_rgba(0,131,147,.28)]">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}   // ← faster pulse
                >
                  <Network size={30} />
                </motion.div>
              </div>

              <div className="absolute right-0 top-[110px] h-[420px] w-[84px] rounded-l-[40px] bg-white/60" />

              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}   // ← faster
                className="text-2xl font-black tracking-[-.04em]"
              >
                OVERVIEW
              </motion.h2>
              <p className="mt-2 max-w-sm text-sm font-medium text-[#52666b]">Here is the hidden AI supply chain, from models down to the chips they depend on.</p>

              <div className="relative mt-8 grid min-h-[430px] grid-cols-[1fr_94px] gap-5">
                <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-b from-[#f6fbfc] to-[#d7e6e8] p-4">
                  <motion.div 
                    className="network-orb absolute left-[10%] top-[11%] h-[300px] w-[300px] rounded-full"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}   // ← faster pulse
                  />
                  {/* All your other absolute divs and static elements remain unchanged */}

                  <svg className="absolute left-[4%] top-[8%] h-[330px] w-[360px]" viewBox="0 0 360 330" fill="none">
                    {topNodes.map((node, idx) => {
                      const pts = [[62,115],[130,42],[246,72],[295,171],[204,257],[87,237]][idx];
                      return (
                        <motion.circle 
                          key={node.id} 
                          cx={pts[0]} 
                          cy={pts[1]} 
                          r={node.centrality / 10} 
                          className="fill-[#007c91] opacity-90"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200 }}   // ← faster
                        />
                      );
                    })}
                    <motion.path 
                      d="M62 115 L130 42 L246 72 L295 171 L204 257 L87 237 Z M62 115 L204 257 M130 42 L295 171 M246 72 L87 237" 
                      stroke="#007c91" 
                      strokeWidth="4" 
                      strokeLinecap="round" 
                      opacity=".55"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.1, ease: "easeInOut" }}   // ← faster
                    />
                  </svg>

                  <div className="absolute bottom-4 left-5 right-5 grid grid-cols-3 gap-4">
                    <MiniCard icon={<ShieldAlert size={18} />} value="1/12" label="Critical choke points" />
                    <MiniCard glow icon={<Activity size={18} />} value="{Nvidia}" label="Dominant hardware" />
                    <div className="relative overflow-hidden rounded-[26px] bg-[#007c91] p-4 text-white">
                      <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[#dfff47] text-black"><ChevronRight size={18} /></button>
                      <CircuitBoard className="mb-8 text-[#dfff47]" size={26} />
                      <p className="text-3xl font-black">{ecosystem.links.length}</p>
                      <p className="text-xs font-bold opacity-80">Relationships mapped</p>
                    </div>
                  </div>
                </div>

                <div className="relative hidden pt-10 md:block">
                  <p className="text-center text-xs font-black text-[#071315]/60">Dependency</p>
                  <p className="text-center text-2xl font-black">{dependencyScore}%</p>
                  <div className="mx-auto mt-6 h-[330px] w-[52px] rounded-full bg-white/80 p-2 shadow-inner">
                    <div className="relative h-full rounded-full bg-gradient-to-t from-[#d8e7e9] to-white">
                      <motion.div 
                        className="absolute bottom-0 w-full rounded-full bg-[#dfff47]"
                        initial={{ height: 0 }}
                        animate={{ height: `${dependencyScore}%` }}
                        transition={{ type: 'spring', stiffness: 120, damping: 14 }}   // ← faster
                      />
                      {[85,70,55,40,25].map((v) => <span key={v} className="absolute left-[-34px] text-xs font-bold text-[#071315]/50" style={{ bottom: `${v}%` }}>{v}%</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SELECT TYPE OF NODE + DEPENDENCY STATISTIC (animations sped up) */}
            <section className="space-y-5">
              <div className="rounded-[32px] bg-white/72 p-7 shadow-[0_25px_80px_rgba(18,73,84,.14)] backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="max-w-[250px] text-2xl font-black leading-none tracking-[-.05em]">SELECT TYPE<br />OF NODE</h2>
                  <button onClick={() => setActive('all')} className="rounded-full bg-white px-5 py-3 text-xs font-black shadow-sm">All Nodes</button>
                </div>
                <div className="mt-5 grid grid-cols-3 items-end gap-4">
                  {(['model','framework','hardware'] as EntityCategory[]).map((cat, i) => {
                    const Icon = categoryMeta[cat].icon;
                    return (
                      <motion.button 
                        key={cat} 
                        onClick={() => setActive(cat)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className={`group rounded-[50%] p-5 transition ${i === 1 ? 'scale-110 bg-[#9eeeff]' : 'bg-[#dffbc2]'} ${active === cat ? 'ring-4 ring-[#dfff47]' : ''}`}
                      >
                        <Icon className="mx-auto h-12 w-12 text-[#008393] transition group-hover:scale-110" />
                      </motion.button>
                    );
                  })}
                </div>
                {/* rest of your slider/dots unchanged */}
              </div>

              <div className="rounded-[32px] bg-[#007c91] p-7 text-white shadow-[0_25px_80px_rgba(0,93,109,.28)]">
                {/* ... your exact dependency statistic code ... */}
                <div className="mt-6 grid grid-cols-[1fr_112px] gap-5">
                  <div className="flex h-[155px] items-end gap-3">
                    {[78,58,100,72,68,82].map((h, i) => (
                      <motion.div 
                        key={i} 
                        className="flex flex-1 flex-col items-center gap-2"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.04, duration: 0.6 }}   // ← faster
                      >
                        <div className={`w-full rounded-full ${i === 2 ? 'bg-[#dfff47]' : 'bg-[#1f94a2]/80'}`} style={{ height: `${h}%` }} />
                        <span className="text-[10px] font-bold text-white/70">{['8:00','12:00','4:00','8:00','00:00','4:00'][i]}</span>
                      </motion.div>
                    ))}
                  </div>
                  {/* glass icons unchanged */}
                </div>
              </div>
            </section>
          </div>

          {/* BOTTOM SECTION */}
          <section className="grid gap-5 xl:grid-cols-[360px_1fr]">
            <div className="rounded-[32px] bg-white/72 p-7 shadow-[0_25px_80px_rgba(18,73,84,.12)]">
              {/* filters unchanged */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                {(Object.keys(categoryMeta) as Array<EntityCategory | 'all'>).map((cat) => {
                  const Icon = categoryMeta[cat].icon;
                  return (
                    <motion.button 
                      key={cat} 
                      onClick={() => setActive(cat)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${active === cat ? categoryMeta[cat].color : 'bg-[#edf7f8]'}`}
                    >
                      <Icon size={17} />{categoryMeta[cat].label}
                    </motion.button>
                  );
                })}
              </div>

              <motion.div 
                className="mt-7 rounded-[26px] bg-[#eff9fa] p-5"
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}   // ← faster
              >
                <p className="text-sm font-black text-[#007c91]">SELECTED ENTITY</p>
                <h3 className="mt-2 text-3xl font-black tracking-[-.05em]">{selected.name}</h3>
                <p className="mt-2 text-sm font-semibold text-[#52666b]">{selected.description}</p>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
                  <motion.div 
                    className="h-full rounded-full bg-[#dfff47]"
                    initial={{ width: 0 }}
                    animate={{ width: `${selected.centrality}%` }}
                    transition={{ type: 'spring', stiffness: 140, damping: 12 }}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {visibleNodes.slice(0, 12).map((node, idx) => {
                const Icon = categoryMeta[node.category].icon;
                return (
                  <motion.button 
                    key={node.id}
                    onClick={() => setSelected(node)}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group min-h-[170px] rounded-[30px] p-5 text-left shadow-[0_20px_55px_rgba(18,73,84,.10)] transition hover:-translate-y-1 ${selected.id === node.id ? 'bg-[#dfff47]' : idx % 4 === 0 ? 'bg-[#007c91] text-white' : 'bg-white/72'}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${selected.id === node.id ? 'bg-black text-[#dfff47]' : 'bg-[#eaf9fb] text-[#007c91]'}`}>
                        <Icon size={22} />
                      </span>
                      <span className="text-2xl font-black">{node.centrality}</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black tracking-[-.04em]">{node.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm font-semibold opacity-70">{node.tags.join(' • ')}</p>
                  </motion.button>
                );
              })}
            </motion.div>
          </section>
        </section>
      </div>
    </main>
  );
}

function MiniCard({ icon, value, label, glow = false }: { icon: ReactNode; value: string; label: string; glow?: boolean }) {
  return (
    <motion.div 
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 250 }}
      className={`rounded-[26px] p-4 shadow-[0_18px_35px_rgba(7,19,21,.10)] ${glow ? 'bg-[#dfff47]' : 'bg-white/85'}`}
    >
      <div className="mb-8 grid h-9 w-9 place-items-center rounded-full bg-white/70 text-[#071315]">{icon}</div>
      <p className="text-3xl font-black tracking-[-.05em]">{value}</p>
      <p className="text-xs font-bold text-[#52666b]">{label}</p>
    </motion.div>
  );
}