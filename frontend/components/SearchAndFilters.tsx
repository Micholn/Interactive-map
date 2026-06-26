import { Search } from 'lucide-react';
import type { EntityCategory } from '@/types/graph';
import type { LucideIcon } from 'lucide-react';

type Props = {
  query: string;
  setQuery: (query: string) => void;
  active: EntityCategory | 'all';
  setActive: (category: EntityCategory | 'all') => void;
  categoryMeta: Record<EntityCategory | 'all', { label: string; icon: LucideIcon; color: string }>;
};

export default function SearchAndFilters({ query, setQuery, active, setActive, categoryMeta }: Props) {
  return (
    <div className="rounded-[32px] bg-white/72 p-7 shadow-[0_25px_80px_rgba(18,73,84,.12)]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">NODE FILTERS</h2>
        <Search size={22} />
      </div>

      <label className="mt-5 flex items-center gap-3 rounded-2xl bg-[#edf7f8] px-4 py-3">
        <Search size={18} className="text-[#008393]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search model, lab, cloud..."
          className="w-full bg-transparent text-sm font-bold outline-none placeholder:text-[#52666b]/60"
        />
      </label>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {(Object.keys(categoryMeta) as Array<EntityCategory | 'all'>).map((cat) => {
          const Icon = categoryMeta[cat].icon;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${active === cat ? categoryMeta[cat].color : 'bg-[#edf7f8]'}`}
            >
              <Icon size={17} />
              {categoryMeta[cat].label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
