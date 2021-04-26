import { createContext } from "react";
import * as Core from "@simplybusiness/mobius-core";

export type MobiusComponentContextType = typeof Core | null;
export const MobiusComponentContext = createContext<MobiusComponentContextType>(
  null
);
