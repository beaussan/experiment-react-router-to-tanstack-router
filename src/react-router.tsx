import { GlobalLayout } from "@/components/GlobalLayout.tsx";
import { AppLayout } from "@/routes/_layout/_app.tsx";
import { LegacyPage } from "@/routes/_layout/_app/one.tsx";
import { ModernPage } from "@/routes/_layout/_app/two.tsx";
import { HowPage } from "@/routes/_layout/how.tsx";
import { MainApp } from "@/routes/_layout/index";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
