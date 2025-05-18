import { MyLink } from "@/components/MyLink.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/_app/legacy")({
	component: LegacyPage,
});

export function LegacyPage() {
	return (
		<div>
			<div>Modern page with only tanstack router links</div>
			<ul className="flex flex-col list-disc">
				<li>
					<MyLink to="/">Home</MyLink>
				</li>
				<li>
					<MyLink to="/modern">Modern</MyLink>
				</li>
			</ul>
		</div>
	);
}
