import { Entity, Relationship } from '@/types/ecosystem';

export const initialEntities: Entity[] = [
  // Models
  { id: 'gpt-4o', name: 'GPT-4o', type: 'model', category: 'Frontier', openness: 'closed', org: 'OpenAI', color: '#10b981' },
  { id: 'claude-4', name: 'Claude 4', type: 'model', category: 'Frontier', openness: 'closed', org: 'Anthropic', color: '#8b5cf6' },
  { id: 'llama-4', name: 'Llama 4', type: 'model', category: 'Open Weights', openness: 'weights', org: 'Meta', color: '#3b82f6' },
  { id: 'gemini-2', name: 'Gemini 2', type: 'model', category: 'Frontier', openness: 'closed', org: 'Google DeepMind', color: '#ea580c' },
  { id: 'grok-3', name: 'Grok 3', type: 'model', category: 'Frontier', openness: 'closed', org: 'xAI', color: '#14b8a6' },
  { id: 'mistral-large', name: 'Mistral Large', type: 'model', category: 'Open Weights', openness: 'weights', org: 'Mistral AI', color: '#f43f5e' },
  { id: 'deepseek-r1', name: 'DeepSeek R1', type: 'model', category: 'Open Weights', openness: 'weights', org: 'DeepSeek', color: '#eab308' },

  // Labs
  { id: 'openai', name: 'OpenAI', type: 'lab', category: 'Lab', color: '#10b981' },
  { id: 'anthropic', name: 'Anthropic', type: 'lab', category: 'Lab', color: '#8b5cf6' },
  { id: 'meta', name: 'Meta', type: 'lab', category: 'Lab', color: '#3b82f6' },
  { id: 'google', name: 'Google DeepMind', type: 'lab', category: 'Lab', color: '#ea580c' },
  { id: 'xai', name: 'xAI', type: 'lab', category: 'Lab', color: '#14b8a6' },
  { id: 'mistral', name: 'Mistral AI', type: 'lab', category: 'Lab', color: '#f43f5e' },

  // Frameworks
  { id: 'pytorch', name: 'PyTorch', type: 'framework', category: 'Framework', color: '#ef4444' },
  { id: 'jax', name: 'JAX', type: 'framework', category: 'Framework', color: '#f59e0b' },
  { id: 'tensorflow', name: 'TensorFlow', type: 'framework', category: 'Framework', color: '#ff5722' },

  // Hardware & Compute
  { id: 'nvidia', name: 'Nvidia', type: 'hardware', category: 'Hardware', color: '#000000' },
  { id: 'aws', name: 'AWS', type: 'compute', category: 'Compute', color: '#f97316' },
  { id: 'azure', name: 'Azure', type: 'compute', category: 'Compute', color: '#0078d4' },
  { id: 'gcp', name: 'Google Cloud', type: 'compute', category: 'Compute', color: '#4285f4' },
];

export const initialRelationships: Relationship[] = [
  { id: 'e1', source: 'gpt-4o', target: 'openai', label: 'developed_by' },
  { id: 'e2', source: 'gpt-4o', target: 'pytorch', label: 'uses' },
  { id: 'e3', source: 'openai', target: 'nvidia', label: 'depends_on' },
  { id: 'e4', source: 'openai', target: 'azure', label: 'trains_on' },
  { id: 'e5', source: 'claude-4', target: 'anthropic', label: 'developed_by' },
  { id: 'e6', source: 'llama-4', target: 'meta', label: 'developed_by' },
  { id: 'e7', source: 'llama-4', target: 'pytorch', label: 'uses' },
  { id: 'e8', source: 'gemini-2', target: 'google', label: 'developed_by' },
  { id: 'e9', source: 'gemini-2', target: 'jax', label: 'uses' },
  { id: 'e10', source: 'grok-3', target: 'xai', label: 'developed_by' },
  { id: 'e11', source: 'xai', target: 'nvidia', label: 'depends_on' },
  { id: 'e12', source: 'mistral-large', target: 'mistral', label: 'developed_by' },
  { id: 'e13', source: 'mistral-large', target: 'pytorch', label: 'uses' },
  { id: 'e14', source: 'deepseek-r1', target: 'pytorch', label: 'uses' },
  { id: 'e15', source: 'meta', target: 'nvidia', label: 'depends_on' },
];