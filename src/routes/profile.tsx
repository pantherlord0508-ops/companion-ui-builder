import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile | Maritime Tech" },
      { name: "description", content: "Researcher profile at Maritime Tech Institute." },
      { property: "og:title", content: "Profile | Maritime Tech" },
      { property: "og:description", content: "Researcher profile at Maritime Tech Institute." },
    ],
  }),
  component: () => (
    <iframe src="/screens/profile.html" title="Profile" className="w-screen h-screen border-0 block" />
  ),
});