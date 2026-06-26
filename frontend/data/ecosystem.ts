import type { EcosystemData } from '@/types/graph';

export const ecosystem: EcosystemData = {
  nodes: [
    {
      id: 'gpt-4',
      name: 'GPT-4',
      category: 'model',
      description: 'A frontier closed-source large language model developed by OpenAI and exposed through ChatGPT and APIs.',
      centrality: 92,
      openStatus: 'closed',
      releaseDate: '2023',
      organization: 'OpenAI',
      tags: ['LLM', 'Closed', 'Frontier model'],
      sources: [{ label: 'OpenAI GPT-4 announcement', url: 'https://openai.com/research/gpt-4' }]
    },
    {
      id: 'claude',
      name: 'Claude',
      category: 'model',
      description: 'A family of AI assistants developed by Anthropic, focused on helpfulness, safety and enterprise use cases.',
      centrality: 86,
      openStatus: 'closed',
      organization: 'Anthropic',
      tags: ['LLM', 'Closed', 'Assistant'],
      sources: [{ label: 'Anthropic Claude', url: 'https://www.anthropic.com/claude' }]
    },
    {
      id: 'llama',
      name: 'LLaMA',
      category: 'model',
      description: 'Meta’s open-weight large language model family, widely used for research, fine-tuning and downstream AI products.',
      centrality: 88,
      openStatus: 'open',
      organization: 'Meta',
      tags: ['LLM', 'Open weights', 'Research'],
      sources: [{ label: 'Meta Llama', url: 'https://ai.meta.com/llama/' }]
    },
    {
      id: 'gemini',
      name: 'Gemini',
      category: 'model',
      description: 'Google DeepMind’s multimodal model family designed for text, code, image and broader reasoning tasks.',
      centrality: 90,
      openStatus: 'closed',
      organization: 'Google DeepMind',
      tags: ['Multimodal', 'Closed', 'Frontier model'],
      sources: [{ label: 'Google Gemini', url: 'https://deepmind.google/technologies/gemini/' }]
    },
    {
      id: 'mistral',
      name: 'Mistral',
      category: 'model',
      description: 'A family of efficient open and commercial models from Mistral AI, including open-weight and hosted model offerings.',
      centrality: 78,
      openStatus: 'mixed',
      organization: 'Mistral AI',
      tags: ['LLM', 'Open weights', 'European AI'],
      sources: [{ label: 'Mistral AI models', url: 'https://mistral.ai/technology/' }]
    },
    {
      id: 'deepseek',
      name: 'DeepSeek',
      category: 'model',
      description: 'A family of reasoning and coding-oriented AI models associated with DeepSeek.',
      centrality: 76,
      openStatus: 'mixed',
      organization: 'DeepSeek',
      tags: ['Reasoning', 'Coding', 'Open weights']
    },
    {
      id: 'grok',
      name: 'Grok',
      category: 'model',
      description: 'xAI’s conversational AI model family integrated with the X ecosystem and developer APIs.',
      centrality: 72,
      openStatus: 'mixed',
      organization: 'xAI',
      tags: ['LLM', 'Assistant', 'xAI']
    },
    {
      id: 'falcon',
      name: 'Falcon',
      category: 'model',
      description: 'Open model family from the Technology Innovation Institute with notable open-weight releases.',
      centrality: 66,
      openStatus: 'open',
      organization: 'TII',
      tags: ['Open weights', 'LLM', 'Research']
    },
    {
      id: 'command-r',
      name: 'Command R',
      category: 'model',
      description: 'Cohere model family focused on retrieval augmented generation, enterprise workflows and tool use.',
      centrality: 70,
      openStatus: 'closed',
      organization: 'Cohere',
      tags: ['RAG', 'Enterprise', 'LLM']
    },
    {
      id: 'stable-diffusion',
      name: 'Stable Diffusion',
      category: 'model',
      description: 'A widely adopted image generation model family with a strong open-source ecosystem.',
      centrality: 82,
      openStatus: 'mixed',
      organization: 'Stability AI',
      tags: ['Diffusion', 'Image', 'Open ecosystem']
    },

    { id: 'openai', name: 'OpenAI', category: 'lab', description: 'AI research and deployment company behind GPT models, ChatGPT and major API products.', centrality: 95, tags: ['AI lab', 'Frontier AI', 'Microsoft partner'], sources: [{ label: 'OpenAI', url: 'https://openai.com/' }] },
    { id: 'anthropic', name: 'Anthropic', category: 'lab', description: 'AI safety-focused company developing the Claude model family.', centrality: 87, tags: ['AI lab', 'Safety', 'Claude'], sources: [{ label: 'Anthropic', url: 'https://www.anthropic.com/' }] },
    { id: 'meta', name: 'Meta', category: 'lab', description: 'Technology company behind LLaMA and a major contributor to the PyTorch ecosystem.', centrality: 91, tags: ['Open weights', 'PyTorch', 'LLaMA'], sources: [{ label: 'Meta AI', url: 'https://ai.meta.com/' }] },
    { id: 'google-deepmind', name: 'Google DeepMind', category: 'lab', description: 'Google’s AI research lab behind Gemini and major AI research systems.', centrality: 93, tags: ['AI lab', 'Gemini', 'TPU'], sources: [{ label: 'Google DeepMind', url: 'https://deepmind.google/' }] },
    { id: 'mistral-ai', name: 'Mistral AI', category: 'lab', description: 'European AI company building open-weight and commercial LLMs.', centrality: 74, tags: ['AI lab', 'Europe', 'Open models'], sources: [{ label: 'Mistral AI', url: 'https://mistral.ai/' }] },
    { id: 'xai', name: 'xAI', category: 'lab', description: 'AI company developing Grok and associated reasoning systems.', centrality: 71, tags: ['AI lab', 'Grok', 'X ecosystem'] },
    { id: 'cohere', name: 'Cohere', category: 'lab', description: 'Enterprise AI company focused on language models, retrieval and business workflows.', centrality: 69, tags: ['Enterprise AI', 'RAG', 'Command R'] },
    { id: 'stability-ai', name: 'Stability AI', category: 'lab', description: 'AI company associated with image generation and the Stable Diffusion ecosystem.', centrality: 67, tags: ['Image AI', 'Diffusion', 'Open ecosystem'] },

    { id: 'pytorch', name: 'PyTorch', category: 'framework', description: 'Widely used machine learning framework originally developed by Meta and used heavily in AI research and training.', centrality: 94, tags: ['Framework', 'Training', 'Research'], sources: [{ label: 'PyTorch', url: 'https://pytorch.org/' }] },
    { id: 'tensorflow', name: 'TensorFlow', category: 'framework', description: 'Machine learning framework developed by Google, used for production ML and research workflows.', centrality: 81, tags: ['Framework', 'Production ML', 'Google'], sources: [{ label: 'TensorFlow', url: 'https://www.tensorflow.org/' }] },
    { id: 'jax', name: 'JAX', category: 'framework', description: 'High-performance numerical computing and machine learning framework used in advanced AI research.', centrality: 84, tags: ['Framework', 'Research', 'Accelerated computing'], sources: [{ label: 'JAX', url: 'https://jax.readthedocs.io/' }] },
    { id: 'cuda', name: 'CUDA', category: 'framework', description: 'NVIDIA parallel computing platform that underpins many GPU-accelerated AI workloads.', centrality: 96, tags: ['GPU software', 'Acceleration', 'NVIDIA'], sources: [{ label: 'NVIDIA CUDA', url: 'https://developer.nvidia.com/cuda-toolkit' }] },

    { id: 'azure', name: 'Microsoft Azure', category: 'compute', description: 'Cloud computing platform deeply connected to OpenAI infrastructure and AI hosting.', centrality: 96, tags: ['Cloud', 'Compute', 'OpenAI'], sources: [{ label: 'Microsoft Azure AI', url: 'https://azure.microsoft.com/en-us/solutions/ai' }] },
    { id: 'aws', name: 'AWS', category: 'compute', description: 'Major cloud provider used across AI training, hosting and inference workloads.', centrality: 89, tags: ['Cloud', 'Compute', 'Anthropic'], sources: [{ label: 'AWS AI', url: 'https://aws.amazon.com/ai/' }] },
    { id: 'google-cloud', name: 'Google Cloud', category: 'compute', description: 'Google cloud infrastructure supporting AI workloads and TPU access.', centrality: 88, tags: ['Cloud', 'TPU', 'Compute'], sources: [{ label: 'Google Cloud AI', url: 'https://cloud.google.com/ai' }] },
    { id: 'oracle-cloud', name: 'Oracle Cloud', category: 'compute', description: 'Cloud infrastructure provider with AI training and GPU services.', centrality: 64, tags: ['Cloud', 'GPU', 'Compute'] },

    { id: 'nvidia', name: 'NVIDIA', category: 'hardware', description: 'Dominant GPU provider powering much of modern AI training and inference.', centrality: 99, tags: ['GPU', 'H100', 'AI hardware'], sources: [{ label: 'NVIDIA AI', url: 'https://www.nvidia.com/en-us/ai-data-science/' }] },
    { id: 'tpu', name: 'Google TPU', category: 'hardware', description: 'Google’s tensor processing infrastructure for large-scale AI workloads.', centrality: 82, tags: ['Accelerator', 'Google', 'Training'], sources: [{ label: 'Google Cloud TPU', url: 'https://cloud.google.com/tpu' }] },
    { id: 'amd-instinct', name: 'AMD Instinct', category: 'hardware', description: 'AMD accelerator platform used as an alternative GPU stack for AI training and inference.', centrality: 68, tags: ['GPU', 'Accelerator', 'Alternative stack'] },

    { id: 'huggingface-transformers', name: 'Transformers', category: 'repository', description: 'Popular open-source library for model loading, training and inference.', centrality: 90, tags: ['Open source', 'Models', 'Inference'], sources: [{ label: 'Hugging Face Transformers', url: 'https://github.com/huggingface/transformers' }] },
    { id: 'vllm', name: 'vLLM', category: 'repository', description: 'High-throughput LLM inference and serving library widely used for production inference.', centrality: 77, tags: ['Inference', 'Serving', 'Open source'], sources: [{ label: 'vLLM GitHub', url: 'https://github.com/vllm-project/vllm' }] },
    { id: 'langchain', name: 'LangChain', category: 'repository', description: 'Framework for building applications around language models, tools, chains and retrieval.', centrality: 79, tags: ['Apps', 'Agents', 'RAG'], sources: [{ label: 'LangChain', url: 'https://github.com/langchain-ai/langchain' }] }
  ],
  links: [
    { source: 'gpt-4', target: 'openai', type: 'developed_by', label: 'developed by' },
    { source: 'claude', target: 'anthropic', type: 'developed_by', label: 'developed by' },
    { source: 'llama', target: 'meta', type: 'developed_by', label: 'developed by' },
    { source: 'gemini', target: 'google-deepmind', type: 'developed_by', label: 'developed by' },
    { source: 'mistral', target: 'mistral-ai', type: 'developed_by', label: 'developed by' },
    { source: 'grok', target: 'xai', type: 'developed_by', label: 'developed by' },
    { source: 'command-r', target: 'cohere', type: 'developed_by', label: 'developed by' },
    { source: 'stable-diffusion', target: 'stability-ai', type: 'developed_by', label: 'developed by' },

    { source: 'llama', target: 'pytorch', type: 'uses', label: 'uses framework' },
    { source: 'mistral', target: 'pytorch', type: 'uses', label: 'uses framework' },
    { source: 'deepseek', target: 'pytorch', type: 'uses', label: 'uses framework' },
    { source: 'gemini', target: 'jax', type: 'uses', label: 'uses framework' },
    { source: 'stable-diffusion', target: 'pytorch', type: 'uses', label: 'uses framework' },
    { source: 'pytorch', target: 'meta', type: 'maintained_by', label: 'maintained by' },
    { source: 'tensorflow', target: 'google-deepmind', type: 'maintained_by', label: 'maintained by' },
    { source: 'jax', target: 'google-deepmind', type: 'maintained_by', label: 'maintained by' },
    { source: 'cuda', target: 'nvidia', type: 'maintained_by', label: 'maintained by' },

    { source: 'openai', target: 'azure', type: 'depends_on', label: 'depends on compute' },
    { source: 'anthropic', target: 'aws', type: 'depends_on', label: 'depends on compute' },
    { source: 'google-deepmind', target: 'google-cloud', type: 'depends_on', label: 'depends on compute' },
    { source: 'mistral-ai', target: 'azure', type: 'depends_on', label: 'depends on compute' },
    { source: 'cohere', target: 'aws', type: 'depends_on', label: 'depends on compute' },
    { source: 'xai', target: 'oracle-cloud', type: 'depends_on', label: 'depends on compute' },

    { source: 'azure', target: 'nvidia', type: 'runs_on', label: 'runs on hardware' },
    { source: 'aws', target: 'nvidia', type: 'runs_on', label: 'runs on hardware' },
    { source: 'google-cloud', target: 'tpu', type: 'runs_on', label: 'runs on hardware' },
    { source: 'oracle-cloud', target: 'nvidia', type: 'runs_on', label: 'runs on hardware' },
    { source: 'cuda', target: 'nvidia', type: 'runs_on', label: 'accelerates' },

    { source: 'huggingface-transformers', target: 'llama', type: 'supports', label: 'supports model' },
    { source: 'huggingface-transformers', target: 'mistral', type: 'supports', label: 'supports model' },
    { source: 'huggingface-transformers', target: 'pytorch', type: 'supports', label: 'supports framework' },
    { source: 'vllm', target: 'llama', type: 'supports', label: 'serves model' },
    { source: 'vllm', target: 'mistral', type: 'supports', label: 'serves model' },
    { source: 'langchain', target: 'gpt-4', type: 'supports', label: 'supports API apps' },
    { source: 'langchain', target: 'claude', type: 'supports', label: 'supports API apps' },

    { source: 'openai', target: 'anthropic', type: 'partners_with', label: 'competes/benchmarks against' },
    { source: 'llama', target: 'mistral', type: 'fine_tuned_from', label: 'influences open model ecosystem' }
  ]
};
