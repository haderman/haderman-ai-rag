import fs from "node:fs/promises";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
// import {
//   Document,
//   MetadataMode,
//   NodeWithScore,
//   VectorStoreIndex,
// } from "llamaindex";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server - haderman - test - 6");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// async function main() {
//   // Load essay from abramov.txt in Node
//   const path = "node_modules/llamaindex/examples/abramov.txt";

//   const essay = await fs.readFile(path, "utf-8");

//   // Create Document object with essay
//   const document = new Document({ text: essay, id_: path });

//   // Split text and create embeddings. Store them in a VectorStoreIndex
//   const index = await VectorStoreIndex.fromDocuments([document]);

//   // Query the index
//   const queryEngine = index.asQueryEngine();
//   const { response, sourceNodes } = await queryEngine.query({
//     query: "What did the author do in college?",
//   });

//   // Output response with sources
//   console.log(response);

//   if (sourceNodes) {
//     sourceNodes.forEach((source: NodeWithScore, index: number) => {
//       console.log(
//         `\n${index}: Score: ${source.score} - ${source.node.getContent(MetadataMode.NONE).substring(0, 50)}...\n`,
//       );
//     });
//   }
// }

// main().catch(console.error);
