import { GlobalLayout } from "@/components/GlobalLayout.tsx";
import { AppLayout } from "@/routes/_layout/_app.tsx";
import { LegacyPage } from "@/routes/_layout/_app/one.tsx";
import { ModernPage } from "@/routes/_layout/_app/two.tsx";
import { HowPage } from "@/routes/_layout/how.tsx";
import { MainApp } from "@/routes/_layout/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

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
									<Route path="/three">
										<div>
											<div>three page</div>
											<RouterLink to="/two">Go to two</RouterLink>
										</div>
									</Route>
									<Route path="/nested/page">
										<div>
											<div>nested page</div>
											<RouterLink to="/two">Go to two</RouterLink>
										</div>
									</Route>
								</AppLayout>
							</Route>
						</Switch>
					</GlobalLayout>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}
