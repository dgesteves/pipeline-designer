import { act, renderHook } from "@testing-library/react";
import useFetchNodes from "./useFetchNodes";

describe("useFetchNodes hook", () => {
  it("Should return expected initial output", async () => {
    const { result } = renderHook(() => useFetchNodes());

    const { nodes, isLoading, error, setNodes } = result.current;
    expect(nodes).toEqual([]);
    expect(isLoading).toBe(true);
    expect(error).toBe("");
    expect(setNodes).toBeInstanceOf(Function);
  });

  it("Should return expected output when fetching nodes", async () => {
    const { result } = renderHook(() => useFetchNodes());

    expect(result.current.nodes).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe("");
    expect(result.current.setNodes).toBeInstanceOf(Function);

    act(() => {
      result.current.setNodes([{ id: "1", name: "query" }]);
      result.current.setIsLoading(false);
      result.current.setError("");
    });

    expect(result.current.nodes).toEqual([{ id: "1", name: "query" }]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("");
  });

  it("Should return expected output when fetching nodes fails", async () => {
    const { result } = renderHook(() => useFetchNodes());

    expect(result.current.nodes).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe("");
    expect(result.current.setNodes).toBeInstanceOf(Function);

    act(() => {
      result.current.setIsLoading(false);
      result.current.setError("Something went wrong");
    });

    expect(result.current.nodes).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe("Something went wrong");
  });
});
