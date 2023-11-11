# Pipeline Designer

* Task Started at Mon 28 Jun 2022
* Author: Diogo Esteves

#### Table of Contents

1. [Coding Task](#task-solution)
2. [Installation Instructions](#installation-instructions)
3. [Test Instructions](#test-instructions)
4. [Architecture](#architecture-decisions)

## LightHouse Report:

<img width="565" alt="Screen Shot 2022-06-27 at 12 32 43 AM" src="https://user-images.githubusercontent.com/34245953/175841075-7996f151-e22c-449e-b2ac-af3acc867640.png">

## Application Solution Video:

https://user-images.githubusercontent.com/34245953/175841325-950c5363-36fe-4659-80fa-0efc41fde6e0.mov


## Frontend Task

We would like to introduce a no-code Pipeline designer to deepset Cloud where you can connect different nodes and design
your Pipelines. The task is to implement a web application for this pipeline designer.

**Pipeline Designer**:

For the scope of this task, please implement a web page where the user can create and move around two or more
nodes/elements. The nodes could be a Query, Retriever and Reader. A combination of these defines a QA Search Pipeline in
our context. It would be nice to have if you could connect nodes with a line.
You do not have to implement everything from scratch. Feel free to use available tools and libraries that help you
implement the needed functionality.

**Here are a few helpful points:**

- Users can add and remove nodes to the design area
- Any nodes can connect to each other
- Query node must be always the first node in the pipeline, and it can be only one There could be multiple Retriever and
  Reader
- You can complete the task on your time but try to time-box it for 3-4 hours.

### Background

Haystack is an end-to-end framework that lets you build robust and production-ready Pipelines for different search use
cases. Whether you want to perform Question Answering or semantic document search, you can use the State-of-the-Art NLP
models in Haystack to provide unique search experiences and allow your users to query in natural language. Haystack is
built in a modular fashion so that you can combine the best technology from other open-source projects like
Huggingface's Transformers, Elasticsearch, or Milvus.

**A minimal Open-Domain QA Pipeline:**

```js
p = Pipeline()
p.add_node(component=retriever, name="ESRetriever1", inputs=["Query"])
p.add_node(component=reader, name="QAReader", inputs=["ESRetriever1"])
res = p.run(query="What did Einstein work on?", top_k_retriever=1)
```

**What is deepset Cloud?**

We are building the deepest Cloud, a complementary platform to our open-source framework. It will enable faster proof of
concepts, smooth transition to production, and help to operate & monitor your Search Pipelines (and more) in the
enterprise context.

**Why do we need a Pipeline designer?**

There is more than one search use case for users. They want, for example, just a document retrieval pipeline to find the
matching documents to their questions. The creation of flexible Pipelines like these is already part of Haystack, and
users can easily design Pipelines customized to their needs. We want to create a no-code pipeline designer for our
complimentary platform.

---

### Task Solution

## Installation Instructions

### Available Scripts

#### `npm start`

#### `npm run build`

## Test Instructions

#### `npm test`

#### `npm run coverage`

- Jest coverage reporter:

1. run `npm test` to get test snapshots and check passing tests.
2. run `npm run coverage` to get coverage and test results.

```zsh
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   64.62 |    22.58 |   70.37 |   67.39 |                   
 src                        |       0 |        0 |       0 |       0 |                   
  App.tsx                   |       0 |      100 |       0 |       0 | 7                 
  index.tsx                 |       0 |      100 |     100 |       0 | 6-15              
  reportWebVitals.ts        |       0 |        0 |       0 |       0 | 3-10              
 src/assets/icons           |       0 |        0 |       0 |       0 |                   
  types.ts                  |       0 |        0 |       0 |       0 |                   
 src/assets/icons/Add       |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
 src/assets/icons/Draggable |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
 src/assets/icons/Remove    |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
 src/assets/styles          |      50 |      100 |       0 |      50 |                   
  globalStyles.ts           |   33.33 |      100 |       0 |   33.33 | 14-15             
  theme.ts                  |     100 |      100 |     100 |     100 |                   
  types.ts                  |       0 |        0 |       0 |       0 |                   
 src/components/Description |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/components/Designer    |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/components/Pipeline    |      95 |     87.5 |   95.65 |   94.73 |                   
  index.tsx                 |    91.3 |     87.5 |      90 |   90.47 | 34,42             
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/constants              |     100 |      100 |     100 |     100 |                   
  index.ts                  |     100 |      100 |     100 |     100 |                   
 src/hooks                  |   83.33 |      100 |     100 |   83.33 |                   
  useFetchNodes.ts          |   83.33 |      100 |     100 |   83.33 | 24-25             
 src/mocks                  |     100 |      100 |     100 |     100 |                   
  handlers.ts               |     100 |      100 |     100 |     100 |                   
  server.ts                 |     100 |      100 |     100 |     100 |                   
 src/pages                  |     100 |      100 |     100 |     100 |                   
  PipelinePage.tsx          |     100 |      100 |     100 |     100 |                   
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/services               |     100 |      100 |     100 |     100 |                   
  api.ts                    |     100 |      100 |     100 |     100 |                   
  types.ts                  |       0 |        0 |       0 |       0 |                   
 src/utils/graph            |       0 |        0 |       0 |       0 |                   
  index.ts                  |       0 |        0 |       0 |       0 | 50-112            
----------------------------|---------|----------|---------|---------|-------------------
```

## Architecture Decisions

General:

- I did not use any library, so you can check my code from scratch, I think that the usage of other libraries would
  remove the purpose of the task for the position.
- The task in my point of view is well done, and it is possible to see some of my programmer skills specific on
  the `Front-end`.
- The data model that I thought was the best was a `Graph` I started by creating a graph data structure, but I decided
  to simplify it as an array instead since each node is unidirectional and does not have splitter.
- I did not have much time for the task, with more time could have been done some improvements.

Accessibility:

- The app is fully accessible.
- Markup is not fully semantic to be honest this could be improved.
- `SEO` could be improved thou if we had multiple pages.

Styles:

- I Chose a futuristic design hope that is of you're liking.
- I opted to use `CSS` in `JS` since, in my opinion, it is cleaner and easy to scale and maintain.
- Styles are fully responsive.
- Properties are fully dynamic.
- Variables are set on global variables.
- I implemented a Theme to be easy to scale the team working on the project since you can just change the variable on
  the theme to change all application styles.
- Code does not use Absolut positioning, although it would be easier, it is harder to scale and maintain.
- I think that the code is well organized and readable, but it could have better UX on dropping elements for example.
- An improvement in the future will be to user a matrix and able the user to move the elements on any position of the
  canvas.
- Other improvement could be the calculation of `x` and `y` position of the elements and set and `SVG` line representing
  the edges.

File Structure:

- The file structure was built with these task necessities in mind and is fully scalable and easy to navigate and
  maintain.
- Every aspect of the respective folder lives inside, so it will be easy to onboard new team members.

Code:

- All `TS` `Types` and `Interfaces` needed to correctly handle type check, of course, that some types will be
  automatically generated but `TS` assertion.
- Some `Type Guards` have to be added in the future.
- To connect to a backend API I would use some server state manager like `React query` on `delete` I would remove
  the `node` and the relative `edges` and set the `child and parent edge to the current edge` depending on the `API`
  implementation, what I am doing right now is too expensive for a big pipeline, on update is easy just need to send the
  new data to that `id` end point, on create I would
  set `curent node toparent and current children to new node children` depending on the `edges relationship` and
  the `API` implementation.
- For the standard `graph` approach I suggest to render `recursively` each `node` by their `edges` relation.
- components are decoupled from different concerns and follow every `React` component creation pattern and best
  practices.
- For the normal `graph` approach I would suggest to use a `web worker` to outsource to a new thread heavy computation
  tasks
  without blocking the `event loop` or spend resources of browser main thread.
- Code should be easily scalable and maintainable for future iterations of development.
- I created a costume `fetcher hook` to be easier to test and some other hooks could be implemented in the future to
  separate `baseness logic` from `UI`.
- Should have more `integration tests` and `E2E tests` but what is done should be more than enough to check how I test
  my code.
- Over all there are a lot of information that I would need to get to think about the best approach, we can discuss that
  decisions on next meeting.

Documentation:

- Did not have much time this week for personal reasons, so I had to choose between extensive documentation on each
  folder like using [storybook](https://storybook.js.org/) or a quick explanation on `README.md`.
- Please don't take it like I did not mind about documentation, just did not seem a priority, in my opinion, does not
  mean that documentation is not important to the contrary.
