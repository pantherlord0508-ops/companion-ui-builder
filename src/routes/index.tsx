import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home | Maritime Tech" },
      { name: "description", content: "Maritime Tech Institute — research, publications and explorations." },
      { property: "og:title", content: "Home | Maritime Tech" },
      { property: "og:description", content: "Maritime Tech Institute — research, publications and explorations." },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe src="/screens/home.html" title="Home" className="w-screen h-screen border-0 block" />;
}
