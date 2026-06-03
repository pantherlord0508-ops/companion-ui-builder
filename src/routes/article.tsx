import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/article")({
  head: () => ({
    meta: [
      { title: "Article | Maritime Tech" },
      { name: "description", content: "In-depth research article from Maritime Tech." },
      { property: "og:title", content: "Article | Maritime Tech" },
      { property: "og:description", content: "In-depth research article from Maritime Tech." },
    ],
  }),
  component: () => (
    <iframe src="/screens/article.html" title="Article" className="w-screen h-screen border-0 block" />
  ),
});