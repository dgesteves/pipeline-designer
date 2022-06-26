import { Edge, Line, Node, PipelineSection } from "./styles";
import { DragEvent, Fragment, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Add from "../../assets/icons/Add";
import Remove from "../../assets/icons/Remove";
import { INode, TName } from "../../services/types";
import useFetchNodes from "../../hooks/useFetchNodes";

export default function Pipeline() {
  const { nodes, setNodes, isLoading, error } = useFetchNodes();

  const onRemove = useCallback(
    (id: string) => {
      setNodes((nodes) => nodes.filter((node) => node.id !== id));
    },
    [setNodes]
  );

  const onDrop = useCallback(
    (e: DragEvent<SVGSVGElement>, index: number) => {
      e.preventDefault();
      const id = uuid();
      const name = e.dataTransfer.getData("name") as TName;
      setNodes((nodes: INode[]) => {
        const newNodes = [...nodes];
        newNodes.splice(index + 1, 0, { id, name });
        return newNodes;
      });
    },
    [setNodes]
  );

  const onDragOver = useCallback((e: DragEvent<SVGSVGElement>) => {
    e.preventDefault();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error} </p>;
  }

  return (
    <PipelineSection data-testid="pipeline-section-test">
      {nodes?.map(({ name, id }, i) => (
        <Fragment key={id}>
          <Node data-testid="node-test">
            <p>{name}</p>
            {name !== "query" && (
              <Remove
                data-testid="remove-node-test"
                onClick={() => onRemove(id)}
              />
            )}
          </Node>
          <Edge>
            <Line />
            <Add
              data-testid="add-node-test"
              onDrop={(e) => onDrop(e, i)}
              onDragOver={onDragOver}
            />
            {id !== nodes?.at(-1)?.id && <Line />}
          </Edge>
        </Fragment>
      ))}
    </PipelineSection>
  );
}
