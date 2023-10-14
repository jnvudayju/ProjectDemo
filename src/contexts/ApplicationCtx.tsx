import { createContext } from "react";

export const ApplicationCtx = createContext<any>({
  sideNavOpen: null,
  setSideNavOpen: Function,
  showStopResponding: null,
  setShowStopResponding: Function,
});
