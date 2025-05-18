import { useRouterStore } from "@/router-switcher.ts";
import { Link as TanstackLink } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

export function MyLink({ children, to }: PropsWithChildren<{ to: string }>) {
	const store = useRouterStore();

	if (store.router === "tanstack") {
		return <TanstackLink to={to}>{children}</TanstackLink>;
	}

	return <RouterLink to={to}>{children}</RouterLink>;
}
