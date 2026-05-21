'use client';

import FlowGraph from './FlowGraph';
import { initialEntities, initialRelationships } from '@/data/ai-ecosystem';
import { useState, useMemo } from 'react';
import { Entity } from '@/types/ecosystem';
import { Search, X, Zap, Github, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIExplorer() {
  const [selectedNode, setSelectedNode] = useState<Entity | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const entityTypes = ['model', 'lab', 'framework', 'compute', 'hardware'];

  const filteredEntities = useMemo(() => {
    return initialEntities.filter(entity => {
      const matchesSearch = entity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (entity.org && entity.org.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = activeFilters.length === 0 || activeFilters.includes(entity.type);
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilters]);

  const toggleFilter = (type: string) => {
    setActiveFilters(prev => prev.includes(type) 
      ? prev.filter(t => t !== type) 
      : [...prev, type]
    );
  };

  return (
    <div className="flex h-screen flex-col bg-zinc-950 text-white overflow-hidden">
      {/* Top Navbar */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 via-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <span className="font-bold text-2xl tracking-tighter">AI Map</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">Explorer</a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">Insights</a>
          <a href="#" className="text-zinc-400 hover:text-white transition-colors">About</a>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-zinc-200 transition-colors">
            <Share2 size={18} /> Share Map
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-zinc-800 px-8 py-8 bg-gradient-to-b from-zinc-950 to-transparent">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold tracking-tighter mb-3">
            AI Ecosystem Explorer
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            Visualizing the hidden dependencies powering modern artificial intelligence
          </p>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 border-r border-zinc-800 bg-zinc-900/50 backdrop-blur p-6 overflow-auto">
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-zinc-500" size={20} />
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full bg-zinc-950 border border-zinc-700 pl-12 py-4 rounded-2xl focus:outline-none focus:border-violet-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">FILTER BY TYPE</h4>
            <div className="flex flex-wrap gap-2">
              {entityTypes.map(type => (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={type}
                  onClick={() => toggleFilter(type)}
                  className={`px-5 py-2.5 rounded-2xl text-sm capitalize border transition-all ${
                    activeFilters.includes(type) 
                      ? 'bg-white text-black' 
                      : 'border-zinc-700 hover:bg-zinc-800'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">LEGEND</h4>
            <div className="space-y-4 text-sm">
              {[
                { color: '#10b981', label: 'Model' },
                { color: '#8b5cf6', label: 'Lab / Organization' },
                { color: '#ef4444', label: 'Framework' },
                { color: '#f97316', label: 'Compute' },
                { color: '#000000', label: 'Hardware' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Graph Canvas */}
        <div className="flex-1 relative bg-[#050505]">
          <FlowGraph 
            initialNodes={filteredEntities} 
            initialEdges={initialRelationships}
            onNodeClick={setSelectedNode}
          />
        </div>

        {/* Right Panel */}
        <AnimatePresence mode="wait">
          {selectedNode && (
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              className="w-96 border-l border-zinc-800 bg-zinc-900/95 backdrop-blur-xl overflow-auto"
            >
              {/* ... (same nice detail panel as before) */}
              <div className="p-8">
                <button onClick={() => setSelectedNode(null)} className="mb-6 text-zinc-400 hover:text-white">
                  ← Back
                </button>
                
                <div className="inline px-4 py-1 rounded-full text-xs" style={{backgroundColor: selectedNode.color + '20', color: selectedNode.color}}>
                  {selectedNode.type}
                </div>

                <h2 className="text-4xl font-bold mt-4 mb-2">{selectedNode.name}</h2>
                {selectedNode.org && <p className="text-2xl text-zinc-400">{selectedNode.org}</p>}

                <div className="mt-10 space-y-6 text-sm">
                  {selectedNode.openness && (
                    <p><span className="text-zinc-500">Openness:</span> <span className="capitalize font-medium">{selectedNode.openness}</span></p>
                  )}
                  <p className="leading-relaxed text-zinc-300">
                    {selectedNode.description || "Key building block in the AI technology stack."}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-4 px-8 text-xs text-zinc-500 flex items-center justify-between bg-zinc-950">
        <p>Built as an interactive demonstration of AI supply chain dependencies</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-zinc-300">GitHub</a>
          <a href="#" className="hover:text-zinc-300">Data Sources</a>
        </div>
      </footer>
    </div>
  );
}