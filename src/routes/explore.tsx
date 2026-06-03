import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Categories | Maritime Tech" },
      { name: "description", content: "Explore research categories at Maritime Tech Institute." },
      { property: "og:title", content: "Explore Categories | Maritime Tech" },
      { property: "og:description", content: "Explore research categories at Maritime Tech Institute." },
    ],
  }),
  component: () => (
    <iframe src="/screens/explore.html" title="Explore" className="w-screen h-screen border-0 block" />
  ),
});