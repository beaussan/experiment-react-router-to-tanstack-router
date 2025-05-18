import { createFileRoute } from "@tanstack/react-router";
import Markdown from "react-markdown";

export const Route = createFileRoute("/_layout/how")({
	component: HowPage,
});

const md = `

Experimental router swap:

Key changes:

Custom store that know what router is currently rendered

\`\`\`ts
import { create } from "zustand";

interface RouterSwitcherStore {
\trouter: "tanstack" | "react-router";
\tswitchRouter: () => void;
}

export const useRouterStore = create<RouterSwitcherStore>()((set) => ({
\trouter: "react-router",
\tswitchRouter: () =>
\t\tset((state) => ({
\t\t\trouter: state.router === "tanstack" ? "react-router" : "tanstack",
\t\t})),
}));
\`\`\`

Then custom Link that has a if statement and renders one or the other

\`\`\`tsx
import { useRouterStore } from "@/router-switcher.ts";
import { Link as TanstackLink } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";
import { Link as RouterLink } from "react-router-dom";

export function MyLink({ children, to }: PropsWithChildren<{ to: string }>) {
\tconst store = useRouterStore();

\tif (store.router === "tanstack") {
\t\treturn <TanstackLink to={to}>{children}</TanstackLink>;
\t}

\treturn <RouterLink to={to}>{children}</RouterLink>;
}
\`\`\`

And all routes must allow for a children, so we can do: if children ? children: Outlet from tanstack router


\`\`\`tsx
export function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {" "}
      <Header />
      <div className="...">
        {children ? children : <Outlet />}
      </div>
      <footer>Footer of app</footer>
    </div>
  );
}
\`\`\`

Large caveats:
- Still need to swap every link in the app
- We need to ensure that both routers are updated at the same time
    - This could lead of routes that exists on one router but not the other
- Maybe harder to lazy load on during the transition
- Switch the router triggers a global re render, may cause api spike usage
- No type safe links during the transition

Worth the effort ? I don't know ¯\\\\\\_(ツ)\\_/¯

For reference, the react router route tree:

\`\`\`tsx
export function Router() {
\treturn (
\t\t<BrowserRouter>
\t\t\t<Switch>
\t\t\t\t<Route path="/">
\t\t\t\t\t<GlobalLayout>
\t\t\t\t\t\t<Switch>
\t\t\t\t\t\t\t<Route exact path="/">
\t\t\t\t\t\t\t\t<MainApp />
\t\t\t\t\t\t\t</Route>
\t\t\t\t\t\t\t<Route path="/how">
\t\t\t\t\t\t\t\t<HowPage />
\t\t\t\t\t\t\t</Route>
\t\t\t\t\t\t\t<Route>
\t\t\t\t\t\t\t\t<AppLayout>
\t\t\t\t\t\t\t\t\t<Route path="/one">
\t\t\t\t\t\t\t\t\t\t<ModernPage />
\t\t\t\t\t\t\t\t\t</Route>
\t\t\t\t\t\t\t\t\t<Route path="/two">
\t\t\t\t\t\t\t\t\t\t<LegacyPage />
\t\t\t\t\t\t\t\t\t</Route>
\t\t\t\t\t\t\t\t</AppLayout>
\t\t\t\t\t\t\t</Route>
\t\t\t\t\t\t</Switch>
\t\t\t\t\t</GlobalLayout>
\t\t\t\t</Route>
\t\t\t</Switch>
\t\t\t<ReactQueryDevtools buttonPosition="bottom-right" />
\t\t</BrowserRouter>
\t);
}
\`\`\`
`;

export function HowPage() {
	return (
		<div className="prose prose-blue mt-5 prose-xl bg-black text-white p-4 rounded-lg">
			<Markdown>{md}</Markdown>
		</div>
	);
}
