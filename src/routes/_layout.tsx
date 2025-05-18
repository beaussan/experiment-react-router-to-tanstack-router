import { GlobalLayout } from "@/components/GlobalLayout.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
	component: GlobalLayout,
});
