import { MyLink } from "@/components/MyLink.tsx";
import { useRouterStore } from "@/router-switcher.ts";

export default function Header() {
	const store = useRouterStore();
	return (
		<header className="p-2 flex  gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row items-center w-full">
				<div className="px-2 font-bold">
					<MyLink to="/">Home</MyLink>
				</div>
				<div className="px-2 font-bold">
					<MyLink to="/how">How</MyLink>
				</div>

				<div className="px-2 font-bold">
					<MyLink to="/one">One</MyLink>
				</div>
				<div className="px-2 font-bold">
					<MyLink to="/two">Two</MyLink>
				</div>
				<div className="px-2 font-bold">
					<MyLink to="/how">How</MyLink>
				</div>
				<div className="ml-auto mr-4">Rendering with {store.router}</div>
				<button
					type="button"
					onClick={() => {
						store.switchRouter();
					}}
					className="cursor-pointer relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
				>
					<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
						Toggle routers{" "}
					</span>
				</button>
			</nav>
		</header>
	);
}
