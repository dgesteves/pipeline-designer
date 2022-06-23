import {useEffect, useState} from 'react';

function Graph() {
  const [nodes, setNodes] = useState(['A', 'B', 'C', 'D', 'E', 'F']);
  const [edges, setEdges] = useState([
    ['A', 'B'],
    ['A', 'C'],
    ['A', 'D'],
    ['B', 'E'],
    ['C', 'F'],
  ]);
  const [graph, setGraph] = useState<Map<string, string[]>>();

  const addNode = (node: string) => {
    setGraph(graph => {
          if (graph) {
            graph.set(node, []);
            return graph;
          }
        },
    );
    setNodes([...nodes, node]);
  };

  const removeNode = (node: string) => {
    setGraph(graph => {
          if (graph) {
            graph.delete(node);
            return graph;
          }
        },
    );
    setNodes(nodes.filter(n => n !== node));
  };

  const addEdge = (from: string, to: string) => {
    setGraph(graph => {
          if (graph) {
            graph.get(from)?.push(to);
            graph.get(to)?.push(from);
            return graph;
          }
        },
    );
    setEdges([...edges, [from, to]]);
  };

  const removeEdge = (from: string, to: string) => {
    setGraph(graph => {
          if (graph) {
            graph.get(from)?.splice(graph.get(from)!.indexOf(to), 1);
            graph.get(to)?.splice(graph.get(to)!.indexOf(from), 1);
            return graph;
          }
        },
    );
    setEdges(edges.filter(([f, t]) => f !== from || t !== to));
  };

  useEffect(() => {
    const graph = new Map<string, string[]>();
    nodes.forEach(node => graph.set(node, []));
    edges.forEach(([from, to]) => {
          graph.get(from)!.push(to);
          graph.get(to)!.push(from);
        },
    );
    setGraph(graph);
  }, [nodes, edges]);

  console.log(graph);

  return (
      <div>
        <div>
          <button onClick={() => addNode('G')}>Add node</button>
          <button onClick={() => removeNode('A')}>Remove node</button>
          <button onClick={() => addEdge('A', 'B')}>Add edge</button>
          <button onClick={() => removeEdge('A', 'B')}>Remove edge</button>
        </div>
        <div>
          <div>
            {nodes.map(node => (
                <div key={node}>{node}</div>
            ))}
          </div>
          <div>
            {edges.map(([from, to]) => (
                <div key={from + to}>{from} {'->'} {to}</div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Graph;