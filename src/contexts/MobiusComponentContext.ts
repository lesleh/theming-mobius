import { createContext } from "react";
import * as Core from "@simplybusiness/mobius-core";

export interface MobiusComponents {
  Box: typeof Core.Box;
  Button: typeof Core.Button;
  // Etc
}

export type MobiusComponentContextType = MobiusComponents | null;
export const MobiusComponentContext = createContext<MobiusComponentContextType>(
  null
);
