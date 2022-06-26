import { rest } from "msw";

export const handlers = [
  rest.get("data.json", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: "981474c8-dce1-4e78-a6ab-445f1123f22c",
        nodes: [
          {
            id: "29fbd98b-4dc2-4635-803b-ec3a0b79eb86",
            name: "query",
          },
          {
            id: "911e5758-4e60-4584-a9ec-d30b505d4591",
            name: "retriever",
          },
          {
            id: "ab12a55b-4807-4446-b868-05940f68a262",
            name: "reader",
          },
        ],
        edges: [
          {
            id: "83fdfae0-e259-4e9d-9c5a-e564aadd514a",
            source: "29fbd98b-4dc2-4635-803b-ec3a0b79eb86",
            target: "911e5758-4e60-4584-a9ec-d30b505d4591",
          },
          {
            id: "d485b9db-2d9d-440d-8e29-e0d421976876",
            source: "911e5758-4e60-4584-a9ec-d30b505d4591",
            target: "ab12a55b-4807-4446-b868-05940f68a262",
          },
        ],
      })
    );
  }),
];
