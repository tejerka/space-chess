import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

const handler = async (req) => {
  const file = await Deno.readFile("./client/dist/index.html");
  return new Response(file, {
    headers: {
      "content-type": "text/css",
    },
  });
}

await listenAndServe(":8000", handler);