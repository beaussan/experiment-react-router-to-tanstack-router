import { createFileRoute } from "@tanstack/react-router";
import logo from "../../logo.svg";

export const Route = createFileRoute("/_layout/")({
	component: MainApp,
});

export function MainApp() {
	return (
		<div className="text-center">
			<header className="">
				<img
					src={logo}
					className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
					alt="logo"
				/>
			</header>
		</div>
	);
}
