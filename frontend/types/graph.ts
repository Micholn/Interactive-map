export type EntityCategory = 'model' | 'lab' | 'framework' | 'compute' | 'hardware' | 'repository';

export type EcosystemNode = {
  id: string;
  name: string;
  category: EntityCategory;
  description: string;
  openness?: 'open' | 'closed' | 'mixed';
  risk?: 'low' | 'medium' | 'high' | 'critical';
  foundedOrReleased?: string;
  tags: string[];
  centrality: number;
};

export type EcosystemLink = {
  source: string;
  target: string;
  relationship: string;
  strength: number;
};

export type GraphData = {
  nodes: EcosystemNode[];
  links: EcosystemLink[];
};
