import { createFileRoute } from "@tanstack/react-router";
import { NoirLanding } from "@/components/noir/NoirLanding";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <NoirLanding />;
}
