Experimental router swap:

Key changes:

Custom store that know what router is currently rendered

```ts
import { create } from "zustand";

interface RouterSwitcherStore {
	router: "tanstack" | "react-router";
	switchRouter: () => void;
}

export const useRouterStore = create<RouterSwitcherStore>()((set) => ({
	router: "react-router",
	switchRouter: () =>
		set((state) => ({
			router: state.router === "tanstack" ? "react-router" : "tanstack",
		})),
}));
```

Then custom Link that has a if statement and renders one or the other

```tsx
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
```

And all routes must allow for a children, so we can do: if children ? children: Outlet from tanstack router


```tsx
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
```

Large caveats:
- Still need to swap every link in the app
- We need to ensure that both routers are updated at the same time
    - This could lead of routes that exists on one router but not the other
- Maybe harder to lazy load on during the transition
- Switch the router triggers a global re render, may cause api spike usage
- No type safe links during the transition

Worth the effort ? I don't know ¯\\\_(ツ)\_/¯

For reference, the react router route tree:

```tsx
export function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<GlobalLayout>
						<Switch>
							<Route exact path="/">
								<MainApp />
							</Route>
							<Route path="/how">
								<HowPage />
							</Route>
							<Route>
								<AppLayout>
									<Route path="/one">
										<ModernPage />
									</Route>
									<Route path="/two">
										<LegacyPage />
									</Route>
								</AppLayout>
							</Route>
						</Switch>
					</GlobalLayout>
				</Route>
			</Switch>
			<ReactQueryDevtools buttonPosition="bottom-right" />
		</BrowserRouter>
	);
}
```