import { RouterProvider, createRouter } from "@tanstack/react-router";
import { type PropsWithChildren, StrictMode } from "react";
import ReactDOM from "react-dom/client";

import * as TanStackQueryProvider from "./integrations/tanstack-query/root-provider.tsx";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./styles.css";
import { Router } from "@/react-router.tsx";
import { useRouterStore } from "@/router-switcher.ts";
// import reportWebVitals from './reportWebVitals.ts'

// Create a new router instance
const router = createRouter({
	routeTree,
	context: {
		...TanStackQueryProvider.getContext(),
	},
	defaultPreload: "intent",
	scrollRestoration: true,
	defaultStructuralSharing: true,
	defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

function GlobalProviders({ children }: PropsWithChildren) {
	// Could be auth, fetcher, whatnot
	return (
		<TanStackQueryProvider.Provider>{children}</TanStackQueryProvider.Provider>
	);
}

function App() {
	const routeurStore = useRouterStore();

	if (routeurStore.router === "react-router") {
		return (
			<GlobalProviders>
				<Router />
			</GlobalProviders>
		);
	}
	return (
		<GlobalProviders>
			<RouterProvider router={router} />
		</GlobalProviders>
	);
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
