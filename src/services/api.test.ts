import { getPipeline } from "./api";

describe("getPipeline fetcher function", () => {
  it("should return a promise", () => {
    expect(getPipeline()).toBeInstanceOf(Promise);
  });

  it("should return a promise that resolves to a pipeline", async () => {
    const pipeline = await getPipeline();
    expect(pipeline).toBeInstanceOf(Object);
  });

  it("should return a promise that resolves to a pipeline with the correct id", async () => {
    const pipeline = await getPipeline();
    expect(pipeline.id).toBe("981474c8-dce1-4e78-a6ab-445f1123f22c");
  });

  it("should return a promise that resolves to a pipeline with the correct nodes length", async () => {
    const pipeline = await getPipeline();
    expect(pipeline.nodes).toBeInstanceOf(Array);
    expect(pipeline.nodes.length).toBe(3);
  });

  it("should return a promise that resolves to a pipeline with the correct edges length", async () => {
    const pipeline = await getPipeline();
    expect(pipeline.edges).toBeInstanceOf(Array);
    expect(pipeline.edges.length).toBe(2);
  });

  it("should return a promise that resolves to a pipeline with the correct nodes", async () => {
    const pipeline = await getPipeline();
    expect(pipeline.nodes[0].name).toBe("query");
    expect(pipeline.nodes[1].name).toBe("retriever");
    expect(pipeline.nodes[2].name).toBe("reader");
  });

  it("should return a promise that resolves to a pipeline with the correct edges", async () => {
    const pipeline = await getPipeline();
    expect(pipeline.edges[0].source).toBe(
      "29fbd98b-4dc2-4635-803b-ec3a0b79eb86"
    );
    expect(pipeline.edges[0].target).toBe(
      "911e5758-4e60-4584-a9ec-d30b505d4591"
    );
    expect(pipeline.edges[1].source).toBe(
      "911e5758-4e60-4584-a9ec-d30b505d4591"
    );
    expect(pipeline.edges[1].target).toBe(
      "ab12a55b-4807-4446-b868-05940f68a262"
    );
  });

  it("should return a promise that resolves to a pipeline with the correct nodes and edges", async () => {
    const pipeline = await getPipeline();
    expect(pipeline.nodes[0].name).toBe("query");
    expect(pipeline.nodes[1].name).toBe("retriever");
    expect(pipeline.nodes[2].name).toBe("reader");
    expect(pipeline.edges[0].source).toBe(
      "29fbd98b-4dc2-4635-803b-ec3a0b79eb86"
    );
    expect(pipeline.edges[0].target).toBe(
      "911e5758-4e60-4584-a9ec-d30b505d4591"
    );
    expect(pipeline.edges[1].source).toBe(
      "911e5758-4e60-4584-a9ec-d30b505d4591"
    );
    expect(pipeline.edges[1].target).toBe(
      "ab12a55b-4807-4446-b868-05940f68a262"
    );
  });
});
