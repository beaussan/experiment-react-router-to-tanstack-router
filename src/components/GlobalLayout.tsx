import Header from "@/components/Header.tsx";
import { Outlet } from "@tanstack/react-router";
import type { PropsWithChildren } from "react";

export function GlobalLayout({ children }: PropsWithChildren) {
	return (
		<div>
			{" "}
			<Header />
			<div className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
				{children ? children : <Outlet />}
			</div>
		</div>
	);
}
