export interface INode {
  id: string;
  name: TName;
}

export interface IEdge {
  id: string;
  source: string;
  target: string;
}

export interface IPipeline {
  id: string;
  nodes: INode[];
  edges: IEdge[];
}

export type TName = "query" | "retriever" | "reader";
