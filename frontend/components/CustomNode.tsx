import React from 'react';
import { Handle, Position } from 'reactflow';
import { Entity } from '@/types/ecosystem';
import { Cpu, Building2, Box, Server, HardDrive } from 'lucide-react';

const iconMap = {
  model: Box,
  lab: Building2,
  framework: Cpu,
  compute: Server,
  hardware: HardDrive,
  repo: Box,
};

interface CustomNodeProps {
  data: Entity;
}

export default function CustomNode({ data }: CustomNodeProps) {
  const Icon = iconMap[data.type] || Box;

  return (
    <div className="px-4 py-3 min-w-[180px] rounded-xl border-2 shadow-lg transition-all hover:shadow-2xl"
         style={{ borderColor: data.color }}>
      
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg" style={{ backgroundColor: data.color + '20' }}>
          <Icon size={20} style={{ color: data.color }} />
        </div>
        <div>
          <div className="font-semibold text-white">{data.name}</div>
          <div className="text-xs text-zinc-400 uppercase tracking-widest">{data.type}</div>
        </div>
      </div>

      {data.org && (
        <div className="text-xs text-zinc-500 mt-2">{data.org}</div>
      )}

      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-zinc-700" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-zinc-700" />
    </div>
  );
}