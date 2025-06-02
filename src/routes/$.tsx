import { Router } from "@/react-router.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Router />;
}
