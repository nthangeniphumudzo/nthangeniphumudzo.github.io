import { createRequestHandler, RouterContextProvider } from "react-router";

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  async fetch(request, env, ctx) {
    const context = new RouterContextProvider();
    const response = await requestHandler(request, context);

    // Pages are server-rendered; never let an edge or browser cache serve a
    // stale page after a deploy. Hashed static assets keep their own caching.
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("text/html")) {
      const headers = new Headers(response.headers);
      headers.set("Cache-Control", "no-store, must-revalidate");
      return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
    }
    return response;
  },
} satisfies ExportedHandler<Env>;
