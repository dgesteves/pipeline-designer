/**
 * @description example of a graph to set pipeline.
 * @constructor {boolean} directed - set to true.
 * @returns {object}
 * @example
 * const g = new Graph();
 *
 * g.addNode("a");
 * g.addNode("b");
 * g.addNode("c");
 * g.addNode("d");
 *
 * g.addEdge("a", "c");
 * g.addEdge("b", "c");
 * g.addEdge("c", "b");
 * g.addEdge("d", "a");
 *
 * g.nodes.map((x) => x.value); // ['a', 'b', 'c', 'd']
 * [...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
 * // ['a => c', 'b => c', 'c => b', 'd => a']
 *
 * g.adjacent("c"); // ['b']
 *
 * g.indegree("c"); // 2
 * g.outdegree("c"); // 1
 *
 * g.hasEdge("d", "a"); // true
 * g.hasEdge("a", "d"); // false
 *
 * g.removeEdge("c", "b");
 *
 * [...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
 * // ['a => c', 'b => c', 'd => a']
 *
 * g.removeNode("c");
 *
 * g.nodes.map((x) => x.value); // ['a', 'b', 'd']
 * [...g.edges.values()].map(({ a, b }) => `${a} => ${b}`);
 * // ['d => a']
 *
 * g.setEdgeWeight("d", "a", 5);
 * g.getEdgeWeight("d", "a"); // 5
 */
export class Graph {
  nodes: { key: string; value: string }[];
  edges: Map<string, { a: string; b: string; weight: number }>;
  private readonly directed: boolean;

  constructor(directed = true) {
    this.directed = directed;
    this.nodes = [];
    this.edges = new Map();
  }

  addNode(key: string, value = key) {
    this.nodes.push({ key, value });
  }

  addEdge(a: string, b: string, weight: number = 1) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.directed)
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
  }

  removeNode(key: string) {
    this.nodes = this.nodes.filter((n) => n.key !== key);
    [...this.edges.values()].forEach(({ a, b }) => {
      if (a === key || b === key) this.edges.delete(JSON.stringify([a, b]));
    });
  }

  removeEdge(a: string, b: string) {
    this.edges.delete(JSON.stringify([a, b]));
    if (!this.directed) this.edges.delete(JSON.stringify([b, a]));
  }

  findNode(key: string) {
    return this.nodes.find((x) => x.key === key);
  }

  hasEdge(a: string, b: string) {
    return this.edges.has(JSON.stringify([a, b]));
  }

  setEdgeWeight(a: string, b: string, weight: number) {
    this.edges.set(JSON.stringify([a, b]), { a, b, weight });
    if (!this.directed)
      this.edges.set(JSON.stringify([b, a]), { a: b, b: a, weight });
  }

  getEdgeWeight(a: string, b: string) {
    return this.edges.get(JSON.stringify([a, b]))?.weight;
  }

  adjacent(key: string) {
    return [...this.edges.values()].reduce((acc, { a, b }) => {
      if (a === key) acc.push(b);
      return acc;
    }, [] as string[]);
  }

  indegree(key: string) {
    return [...this.edges.values()].reduce((acc, { b }) => {
      if (b === key) acc++;
      return acc;
    }, 0);
  }

  outdegree(key: string) {
    return [...this.edges.values()].reduce((acc, { a }) => {
      if (a === key) acc++;
      return acc;
    }, 0);
  }
}
