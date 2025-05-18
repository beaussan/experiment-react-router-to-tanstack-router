import { Outlet, createFileRoute } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

export const Route = createFileRoute("/_layout/_app")({
	component: AppLayout,
});

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<div>
			<span className="text-amber-500">Context for app loaded</span>
			{children ? children : <Outlet />}
		</div>
	);
}
