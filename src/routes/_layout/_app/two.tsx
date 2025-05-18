import { MyLink } from "@/components/MyLink.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_app/two")({
	component: ModernPage,
});

export function ModernPage() {
	return (
		<div>
			<div>Page with layout Two</div>
			<ul className="flex flex-col list-disc">
				<li>
					<MyLink to="/">Home</MyLink>
				</li>
				<li>
					<MyLink to="/one">One</MyLink>
				</li>
			</ul>
		</div>
	);
}
