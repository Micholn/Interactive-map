import { Entity, Relationship } from '@/types/ecosystem';

export const initialEntities: Entity[] = [
  // Models
  { id: 'gpt-4o', name: 'GPT-4o', type: 'model', category: 'Frontier', openness: 'closed', org: 'OpenAI', color: '#10b981' },
  { id: 'claude-4', name: 'Claude 4', type: 'model', category: 'Frontier', openness: 'closed', org: 'Anthropic', color: '#8b5cf6' },
  { id: 'llama-4', name: 'Llama 4', type: 'model', category: 'Open Weights', openness: 'weights', org: 'Meta', color: '#3b82f6' },
  { id: 'gemini-2', name: 'Gemini 2', type: 'model', category: 'Frontier', openness: 'closed', org: 'Google DeepMind', color: '#ea580c' },
  
  // Labs
  { id: 'openai', name: 'OpenAI', type: 'lab', category: 'Lab', color: '#10b981' },
  { id: 'anthropic', name: 'Anthropic', type: 'lab', category: 'Lab', color: '#8b5cf6' },
  { id: 'meta', name: 'Meta AI', type: 'lab', category: 'Lab', color: '#3b82f6' },
  
  // Frameworks
  { id: 'pytorch', name: 'PyTorch', type: 'framework', category: 'Framework', color: '#ef4444' },
  { id: 'jax', name: 'JAX', type: 'framework', category: 'Framework', color: '#f59e0b' },
  
  // Hardware & Compute
  { id: 'nvidia', name: 'Nvidia', type: 'hardware', category: 'Hardware', color: '#000000' },
  { id: 'aws', name: 'AWS', type: 'compute', category: 'Compute', color: '#f97316' },
];

export const initialRelationships: Relationship[] = [
  { id: 'e1', source: 'gpt-4o', target: 'openai', label: 'developed_by' },
  { id: 'e2', source: 'gpt-4o', target: 'pytorch', label: 'uses' },
  { id: 'e3', source: 'openai', target: 'nvidia', label: 'depends_on' },
  { id: 'e4', source: 'openai', target: 'aws', label: 'trains_on' },
  { id: 'e5', source: 'llama-4', target: 'meta', label: 'developed_by' },
  { id: 'e6', source: 'llama-4', target: 'pytorch', label: 'uses' },
  // Add more...
];