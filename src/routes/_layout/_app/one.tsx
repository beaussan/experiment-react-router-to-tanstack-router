import { MyLink } from "@/components/MyLink.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_app/one")({
	component: LegacyPage,
});

export function LegacyPage() {
	return (
		<div>
			<div>Page with layout One</div>
			<ul className="flex flex-col list-disc">
				<li>
					<MyLink to="/">Home</MyLink>
				</li>
				<li>
					<MyLink to="/two">Two</MyLink>
				</li>
			</ul>
		</div>
	);
}
