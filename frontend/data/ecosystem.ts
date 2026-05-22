import { GraphData } from '@/types/graph';

export const ecosystem: GraphData = {
  nodes: [
    { id: 'gpt-4', name: 'GPT-4', category: 'model', description: 'Closed frontier model family developed by OpenAI.', openness: 'closed', risk: 'high', foundedOrReleased: '2023', tags: ['LLM', 'multimodal', 'API'], centrality: 88 },
    { id: 'claude', name: 'Claude', category: 'model', description: 'Anthropic assistant model family focused on helpfulness and safety.', openness: 'closed', risk: 'high', foundedOrReleased: '2023', tags: ['LLM', 'API'], centrality: 80 },
    { id: 'gemini', name: 'Gemini', category: 'model', description: 'Google DeepMind multimodal model family.', openness: 'closed', risk: 'high', foundedOrReleased: '2023', tags: ['LLM', 'multimodal'], centrality: 83 },
    { id: 'llama', name: 'LLaMA', category: 'model', description: 'Meta model family widely used across open-weight fine-tuning ecosystems.', openness: 'open', risk: 'medium', foundedOrReleased: '2023', tags: ['open weights', 'LLM'], centrality: 92 },
    { id: 'mistral', name: 'Mistral', category: 'model', description: 'European model family with open and commercial releases.', openness: 'mixed', risk: 'medium', foundedOrReleased: '2023', tags: ['LLM', 'European AI'], centrality: 71 },
    { id: 'deepseek', name: 'DeepSeek', category: 'model', description: 'Model family known for strong open-weight releases and reasoning capabilities.', openness: 'mixed', risk: 'medium', foundedOrReleased: '2024', tags: ['LLM', 'reasoning'], centrality: 69 },
    { id: 'stable-diffusion', name: 'Stable Diffusion', category: 'model', description: 'Image generation model ecosystem with broad open-source adoption.', openness: 'open', risk: 'medium', foundedOrReleased: '2022', tags: ['image', 'diffusion'], centrality: 76 },

    { id: 'openai', name: 'OpenAI', category: 'lab', description: 'AI research and product lab behind GPT models and ChatGPT.', openness: 'closed', risk: 'high', foundedOrReleased: '2015', tags: ['frontier lab', 'API'], centrality: 95 },
    { id: 'anthropic', name: 'Anthropic', category: 'lab', description: 'AI safety-focused lab behind Claude.', openness: 'closed', risk: 'high', foundedOrReleased: '2021', tags: ['frontier lab', 'safety'], centrality: 86 },
    { id: 'meta', name: 'Meta', category: 'lab', description: 'Technology company maintaining PyTorch and releasing LLaMA models.', openness: 'mixed', risk: 'medium', foundedOrReleased: '2004', tags: ['open weights', 'research'], centrality: 96 },
    { id: 'deepmind', name: 'Google DeepMind', category: 'lab', description: 'Google AI lab behind Gemini and major research breakthroughs.', openness: 'closed', risk: 'high', foundedOrReleased: '2010', tags: ['frontier lab', 'research'], centrality: 93 },
    { id: 'mistral-ai', name: 'Mistral AI', category: 'lab', description: 'Paris-based AI company building open and commercial models.', openness: 'mixed', risk: 'medium', foundedOrReleased: '2023', tags: ['European AI', 'LLM'], centrality: 66 },
    { id: 'stability-ai', name: 'Stability AI', category: 'lab', description: 'Organization associated with Stable Diffusion ecosystem.', openness: 'mixed', risk: 'medium', foundedOrReleased: '2019', tags: ['image AI'], centrality: 61 },

    { id: 'pytorch', name: 'PyTorch', category: 'framework', description: 'Dominant deep learning framework used across research and production.', openness: 'open', risk: 'critical', foundedOrReleased: '2016', tags: ['training', 'research'], centrality: 98 },
    { id: 'tensorflow', name: 'TensorFlow', category: 'framework', description: 'Google-originated ML framework used in production ML systems.', openness: 'open', risk: 'high', foundedOrReleased: '2015', tags: ['training', 'serving'], centrality: 78 },
    { id: 'jax', name: 'JAX', category: 'framework', description: 'High-performance numerical computing framework popular in frontier research.', openness: 'open', risk: 'high', foundedOrReleased: '2018', tags: ['research', 'accelerated compute'], centrality: 82 },
    { id: 'transformers', name: 'Hugging Face Transformers', category: 'repository', description: 'Core library connecting models, datasets, tokenizers, and inference workflows.', openness: 'open', risk: 'critical', foundedOrReleased: '2018', tags: ['repository', 'inference'], centrality: 97 },
    { id: 'vllm', name: 'vLLM', category: 'repository', description: 'Open-source serving library for high-throughput LLM inference.', openness: 'open', risk: 'medium', foundedOrReleased: '2023', tags: ['serving', 'inference'], centrality: 73 },

    { id: 'azure', name: 'Microsoft Azure', category: 'compute', description: 'Cloud provider deeply connected to enterprise AI deployment and OpenAI workloads.', openness: 'closed', risk: 'critical', foundedOrReleased: '2010', tags: ['cloud', 'GPU clusters'], centrality: 94 },
    { id: 'aws', name: 'AWS', category: 'compute', description: 'Major cloud platform offering AI training and inference infrastructure.', openness: 'closed', risk: 'critical', foundedOrReleased: '2006', tags: ['cloud', 'GPU clusters'], centrality: 91 },
    { id: 'gcp', name: 'Google Cloud', category: 'compute', description: 'Cloud provider offering GPU and TPU infrastructure for AI workloads.', openness: 'closed', risk: 'critical', foundedOrReleased: '2008', tags: ['cloud', 'TPU'], centrality: 90 },

    { id: 'nvidia', name: 'Nvidia', category: 'hardware', description: 'Dominant GPU hardware provider for AI training and inference.', openness: 'closed', risk: 'critical', foundedOrReleased: '1993', tags: ['GPU', 'CUDA'], centrality: 100 },
    { id: 'tpu', name: 'Google TPU', category: 'hardware', description: 'Google accelerator infrastructure used for large-scale machine learning.', openness: 'closed', risk: 'high', foundedOrReleased: '2016', tags: ['accelerator', 'Google'], centrality: 79 },
    { id: 'cuda', name: 'CUDA', category: 'hardware', description: 'Nvidia software platform that creates a powerful dependency layer around GPUs.', openness: 'closed', risk: 'critical', foundedOrReleased: '2007', tags: ['GPU software', 'compiler'], centrality: 99 }
  ],
  links: [
    { source: 'gpt-4', target: 'openai', relationship: 'developed_by', strength: 1 },
    { source: 'claude', target: 'anthropic', relationship: 'developed_by', strength: 1 },
    { source: 'gemini', target: 'deepmind', relationship: 'developed_by', strength: 1 },
    { source: 'llama', target: 'meta', relationship: 'developed_by', strength: 1 },
    { source: 'mistral', target: 'mistral-ai', relationship: 'developed_by', strength: 1 },
    { source: 'deepseek', target: 'pytorch', relationship: 'uses_framework', strength: .7 },
    { source: 'stable-diffusion', target: 'stability-ai', relationship: 'associated_with', strength: .8 },

    { source: 'openai', target: 'azure', relationship: 'depends_on_compute', strength: 1 },
    { source: 'anthropic', target: 'aws', relationship: 'depends_on_compute', strength: .9 },
    { source: 'anthropic', target: 'gcp', relationship: 'depends_on_compute', strength: .7 },
    { source: 'deepmind', target: 'gcp', relationship: 'depends_on_compute', strength: 1 },
    { source: 'meta', target: 'aws', relationship: 'cloud_usage', strength: .6 },

    { source: 'pytorch', target: 'meta', relationship: 'maintained_by', strength: 1 },
    { source: 'tensorflow', target: 'deepmind', relationship: 'google_ecosystem', strength: .7 },
    { source: 'jax', target: 'deepmind', relationship: 'used_by', strength: .8 },
    { source: 'llama', target: 'pytorch', relationship: 'uses_framework', strength: 1 },
    { source: 'mistral', target: 'pytorch', relationship: 'uses_framework', strength: .8 },
    { source: 'gemini', target: 'jax', relationship: 'research_stack', strength: .7 },
    { source: 'stable-diffusion', target: 'pytorch', relationship: 'uses_framework', strength: .9 },

    { source: 'transformers', target: 'pytorch', relationship: 'supports_framework', strength: 1 },
    { source: 'transformers', target: 'tensorflow', relationship: 'supports_framework', strength: .8 },
    { source: 'transformers', target: 'jax', relationship: 'supports_framework', strength: .8 },
    { source: 'transformers', target: 'llama', relationship: 'supports_model', strength: .9 },
    { source: 'vllm', target: 'llama', relationship: 'serves_model', strength: .7 },
    { source: 'vllm', target: 'mistral', relationship: 'serves_model', strength: .7 },

    { source: 'azure', target: 'nvidia', relationship: 'runs_on', strength: 1 },
    { source: 'aws', target: 'nvidia', relationship: 'runs_on', strength: 1 },
    { source: 'gcp', target: 'nvidia', relationship: 'offers_gpu', strength: .9 },
    { source: 'gcp', target: 'tpu', relationship: 'offers_accelerator', strength: 1 },
    { source: 'nvidia', target: 'cuda', relationship: 'software_stack', strength: 1 },
    { source: 'pytorch', target: 'cuda', relationship: 'accelerated_by', strength: 1 },
    { source: 'tensorflow', target: 'cuda', relationship: 'accelerated_by', strength: .8 },
    { source: 'jax', target: 'tpu', relationship: 'accelerated_by', strength: .8 }
  ]
};
