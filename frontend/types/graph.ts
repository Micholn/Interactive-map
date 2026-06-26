export type EntityCategory = 'model' | 'lab' | 'framework' | 'repository' | 'compute' | 'hardware';

export type RelationshipType =
  | 'developed_by'
  | 'uses'
  | 'maintained_by'
  | 'depends_on'
  | 'runs_on'
  | 'supports'
  | 'partners_with'
  | 'fine_tuned_from';

export type EcosystemNode = {
  id: string;
  name: string;
  category: EntityCategory;
  description: string;
  centrality: number;
  openStatus?: 'open' | 'closed' | 'mixed';
  releaseDate?: string;
  organization?: string;
  tags: string[];
  sources?: {
    label: string;
    url: string;
  }[];
};

export type EcosystemLink = {
  source: string;
  target: string;
  type: RelationshipType;
  label: string;
  evidence?: string;
};

export type EcosystemData = {
  nodes: EcosystemNode[];
  links: EcosystemLink[];
};
