import { EntityCategory } from '@/types/graph';
import { categoryStyles } from '@/lib/graph-utils';

const categories: EntityCategory[] = ['model', 'lab', 'framework', 'repository', 'compute', 'hardware'];

export function FilterRail({ active, onChange }: { active: EntityCategory | 'all'; onChange: (value: EntityCategory | 'all') => void }) {
  return (
    <aside className="glass rounded-3xl p-4">
      <h2 className="mb-4 px-2 font-display text-xl font-semibold">Explore by layer</h2>
      <div className="space-y-2">
        <button onClick={() => onChange('all')} className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${active === 'all' ? 'bg-white text-slate-950' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>
          All layers
        </button>
        {categories.map((category) => (
          <button key={category} onClick={() => onChange(category)} className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${active === category ? categoryStyles[category].bg : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'}`}>
            {categoryStyles[category].label}
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: categoryStyles[category].color }} />
          </button>
        ))}
      </div>
    </aside>
  );
}
