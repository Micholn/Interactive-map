export type EntityType = 'model' | 'lab' | 'framework' | 'compute' | 'hardware' | 'repo';

export interface Entity {
  id: string;
  name: string;
  type: EntityType;
  category: string;
  description?: string;
  org?: string;
  releaseDate?: string;
  openness?: 'closed' | 'open' | 'weights';
  link?: string;
  color?: string;
}

export interface Relationship {
  id: string;
  source: string;
  target: string;
  label: string; // e.g., "uses", "developed_by", "runs_on"
  type?: string;
}

export interface EcosystemData {
  nodes: Entity[];
  edges: Relationship[];
}