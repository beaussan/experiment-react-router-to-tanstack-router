import { create } from "zustand";

interface RouterSwitcherStore {
	router: "tanstack" | "react-router";
	switchRouter: () => void;
}

export const useRouterStore = create<RouterSwitcherStore>()((set) => ({
	router: "tanstack",
	switchRouter: () =>
		set((state) => ({
			router: state.router === "tanstack" ? "react-router" : "tanstack",
		})),
}));
