import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";

const handler = async (req) => {
  const { pathname } = new URL(req.url);

  console.log(pathname);
  if (pathname === '/main.js') {
    new Response(await Deno.readFile("./client/dist/main.js"), {
      headers: {
        "content-type": "application/javascript",
      },
    })
  }

  if (pathname === '/manifest.json') {
    new Response(await Deno.readFile("./client/dist/manifest.json"), {
      headers: {
        "content-type": "application/json",
      },
    })
  }

  const file = await Deno.readFile("./client/dist/index.html");
  return new Response(file, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

await listenAndServe(":8000", handler);