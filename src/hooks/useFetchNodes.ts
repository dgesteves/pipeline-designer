import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { INode } from "../services/types";
import { getPipeline } from "../services/api";

export default function useFetchNodes(): {
  nodes: INode[];
  setNodes: Dispatch<SetStateAction<INode[]>>;
  error: string;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string>>;
} {
  const [nodes, setNodes] = useState<INode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { nodes } = await getPipeline();
        setNodes(nodes);
        setIsLoading(false);
      } catch (e) {
        setError((e as Error).message);
        setIsLoading(false);
      }
    })();
  }, []);

  return { nodes, setNodes, error, isLoading, setError, setIsLoading };
}
